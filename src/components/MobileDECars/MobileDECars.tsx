import { useEffect, useState } from 'react';
import { Car } from '../../lib/types';
import './MobileDECars.css';

const MobileDECars = () => {

  const [cars, setCars] = useState<Car[]>([]);

  const formatDate = (dateString?: string | null) => {
    if (!dateString) return undefined;
    const [year, month] = dateString.split('-');
    return `${month}/${year}`;
  };

  const formatePrice = (price: number | undefined) => {
    if (price === undefined) return undefined;
    return `${price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`;
  };    

  const parseXMLResponse = (xmlString: string): Car[] => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

    const adElements = xmlDoc.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'ad');

    return Array.from(adElements).map(adElement => {
      // Using getElementsByTagNameNS to handle namespaced elements
      const makeElement = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'make')[0];
      const modelDescriptionElement = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'model-description')[0];
      const priceElement = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'consumer-price-amount')[0];
      const detailPageElement = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'detail-page')[0];
      const images = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'representation');
      const firstRegistrationElement = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'first-registration')[0];
      const mileageElement = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'mileage')[0];
      const generalInspectionElement = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'general-inspection')[0];
      const features = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'feature');
      const powerElement = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'power')[0];
      const gearboxElement = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'gearbox')[0];
      const fuelTypeElement = adElement.getElementsByTagNameNS('http://services.mobile.de/schema/ad', 'fuel')[0];
      
      const xxxlImage = Array.from(images).find(img => img.getAttribute('size') === 'XXXL');
      const make = makeElement?.getElementsByTagNameNS('http://services.mobile.de/schema/resource', 'local-description')[0]?.textContent || "";
      const modelDescription = modelDescriptionElement?.getAttribute('value') || "";
      const mileage = mileageElement?.getAttribute('value') || "0 km";
      const generalInspectionDate = generalInspectionElement?.getAttribute('value') || "";
      const hasNewHuAu = Array.from(features).some(feature => 
        feature.getAttribute('key') === 'HU_AU_NEU'
      );
      const power = powerElement?.getAttribute('value') || "";
      const gearbox = gearboxElement?.getElementsByTagNameNS('http://services.mobile.de/schema/resource', 'local-description')[0]?.textContent || "";
      const fuelType = fuelTypeElement?.getElementsByTagNameNS('http://services.mobile.de/schema/resource', 'local-description')[0]?.textContent || "";

      const car = {
        title: `${make} ${modelDescription}`,
        price: parseFloat(priceElement.getAttribute('value') || '0'),
        detailPageUrl: detailPageElement?.getAttribute('url') || undefined,
        images: xxxlImage ? [{ xxxl: xxxlImage.getAttribute('url') || undefined }] : [],
        firstRegistrationDate: formatDate(firstRegistrationElement.getAttribute('value')),
        mileage: parseInt(mileage).toLocaleString('de-DE') + " km",
        generalInspectionDate: formatDate(generalInspectionDate),
        newHuAu: hasNewHuAu ? "true" : "false",
        power: power + " kW / " + Math.round(parseInt(power) * 1.36) + " PS",
        gearbox: gearbox,
        fuelType: fuelType,
      };
      return car;
    });
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('https://wrangler-app.mobile-de-proxy-panba.workers.dev/?customerNumber=864291', {
          headers: {
            'Accept': 'application/vnd.de.mobile.api+xml'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.text();
        const parsedCars = parseXMLResponse(data);
        setCars(parsedCars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="mobilede-cars">
      <div className='pb-10'>
        {cars.length === 0 ? (
          <p>Leider haben wir aktuell keine Fahrzeuge im Angebot. <br />Das tatsächliche Angebot kann vom Online-Angebot abweichen, also schauen Sie gerne persönlich bei uns vorbei.</p>
        ) : (
          <p>Hier finden Sie eine auswahl unseres Online-Angebots an Fahrzeugen. <br />Das tatsächliche Angebot kann vom Online-Angebot abweichen, also schauen Sie gerne persönlich bei uns vorbei.</p>
        )}
      </div>
      <div className="car-list flex flex-wrap justify-center gap-4">
        {cars.map((car, index) => (
          <a key={index} 
             className="car-item bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-700"
             href={car.detailPageUrl} 
             target="_blank" 
             rel="noopener noreferrer"
          >
            <div className="relative">
              <img 
                className="w-full h-48 object-cover" 
                src={car.images?.[0]?.xxxl} 
                alt={`${car.make} ${car.modelDescription}`} 
              />
              <div className="absolute top-0 right-0 m-2 px-3 py-1 bg-zinc-900/80 rounded-full text-white">
                {formatePrice(car.price)}
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              <h2 className="text-xl font-semibold text-white">{car.title}</h2>
              
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Erstzulassung:</span>
                  <span>{car.firstRegistrationDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">HU/AU:</span>
                  <span>{car.newHuAu === "true" ? "Neu" : car.generalInspectionDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Kilometer:</span>
                  <span>{car.mileage}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Leistung:</span>
                  <span>{car.power}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Getriebe:</span>
                  <span>{car.gearbox}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Kraftstoff:</span>
                  <span>{car.fuelType}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileDECars;