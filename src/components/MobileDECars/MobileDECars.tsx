import { useEffect, useState } from 'react';
import { Car } from '../../lib/types';
import './MobileDECars.css';

const MobileDECars = () => {

  const [cars, setCars] = useState<Car[]>([]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return undefined;
    const year= dateString.substring(0, 4);
    const month= dateString.substring(4, 6);
    return `${month}/${year}`;
  };

  const parseCarsFromXML = (xmlString: string): Car[] => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const carElements = xmlDoc.getElementsByTagName('ad');
    console.log('====================================');
    console.log('carElements', carElements);
    console.log('====================================');

    const cars: Car[] = Array.from(carElements).map((carElement) => {
      return {
        detailPageUrl: carElement.getElementsByTagName('detailPageUrl')[0].textContent || '',
        image: carElement.getElementsByTagName('xxxl')[0].textContent || '',
        price: parseFloat(carElement.getElementsByTagName('price')[0].textContent || '0'),
        make: carElement.getElementsByTagName('make')[0].textContent || '',
        modelDescription: carElement.getElementsByTagName('modelDescription')[0].textContent || '',
        title: carElement.getElementsByTagName('modelDescription')[0].textContent || '',
        firstRegistrationDate: formatDate(carElement.getElementsByTagName('firstRegistration')[0].textContent) || '',
        generalInspectionDate: formatDate(carElement.getElementsByTagName('generalInspection')[0]?.textContent) || '',
        newHuAu: carElement.getElementsByTagName('newHuAu')[0]?.textContent || '',
        mileage: parseInt(carElement.getElementsByTagName('mileage')[0].textContent || '0', 10),
        power: parseInt(carElement.getElementsByTagName('power')[0].textContent || '0', 10),
        gearbox: carElement.getElementsByTagName('gearbox')[0].textContent === 'AUTOMATIC_GEAR' ? 'Automatik' : 'Schaltgetriebe',
        fuelType: carElement.getElementsByTagName('fuel')[0].textContent == 'PETROL' ? 'Benzin' : carElement.getElementsByTagName('fuel')[0].textContent == 'DIESEL' ? 'Diesel' : 'Elektrisch',
      };
    });

    return cars;
  }

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('https://wrangler-app.mobile-de-proxy-panba.workers.dev?customerNumber=864291', {
          headers: {
            'Accept': 'application/vnd.de.mobile.api+json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        const parsedCars = parseCarsFromXML(data);
        setCars(parsedCars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    console.log('Cars fetched:', cars);
  }, [cars]);


  const formatePrice = (price: number) => `${price.toLocaleString("de-DE")} €`;

  let carCount = cars.length;
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
          <a
            key={index}
            className="car-item bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-700"
            href={car.detailPageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              <img
                className="w-full h-48 object-cover"
                src={car.image}
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
                  <span>{car.mileage.toLocaleString()} km</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Leistung:</span>
                  <span>{car.power} PS</span>
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