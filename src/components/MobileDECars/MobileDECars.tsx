import { useEffect, useState } from 'react';
import { Car } from '../../lib/types';
import './MobileDECars.css';

const MobileDECars = () => {

  const [cars, setCars] = useState<Car[]>([]);

  // const formatDate = (dateString?: string | null) => {
  //   if (!dateString) return undefined;
  //   const [year, month] = dateString.split('-');
  //   return `${month}/${year}`;
  // };

  // const formatePrice = (price: number | undefined) => {
  //   if (price === undefined) return undefined;
  //   return `${price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`;
  // };    

  const parseCarsFromXML = (xmlString: string): Car[] => {
    console.log('Parsing XML...');
    
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, "application/xml");
    const ads = Array.from(xml.getElementsByTagName("ad:ad"));

    return ads.map((ad) => {
      const getText = (tagName: string, parent: Element = ad): string => {
        const el = parent.getElementsByTagName(tagName)[0];
        return el?.textContent?.trim() || "";
      };

      const detailPageUrl = ad.getElementsByTagName("ad:detail-page")[0]?.getAttribute("url") || "";

      const imageUrl = ad.getElementsByTagName("ad:image")[0]
        ?.getElementsByTagName("ad:representation")
        ?.namedItem("XL")
        ?.getAttribute("url") ||
        ad.getElementsByTagName("ad:image")[0]
          ?.getElementsByTagName("ad:representation")[0]
          ?.getAttribute("url") || "";

      const specifics = ad.getElementsByTagName("ad:specifics")[0];

      return {
        detailPageUrl,
        images: imageUrl,
        price: parseFloat(ad.getElementsByTagName("ad:consumer-price-amount")[0]?.getAttribute("value") || "0"),
        make: getText("ad:make"),
        modelDescription: ad.getElementsByTagName("ad:model-description")[0]?.getAttribute("value") || "",
        title: `${getText("ad:make")} ${getText("ad:model")} ${ad.getElementsByTagName("ad:model-description")[0]?.getAttribute("value") || ""}`,
        firstRegistrationDate: specifics?.getElementsByTagName("ad:first-registration")[0]?.getAttribute("value") || "",
        generalInspectionDate: getText("resource:local-description", ad.getElementsByTagName("ad:feature").namedItem("HU_AU_NEU") || ad),
        newHuAu: ad.getElementsByTagName("ad:feature").namedItem("HU_AU_NEU") ? "true" : "false",
        mileage: parseInt(specifics?.getElementsByTagName("ad:mileage")[0]?.getAttribute("value") || "0"),
        power: parseInt(specifics?.getElementsByTagName("ad:power")[0]?.getAttribute("value") || "0"),
        gearbox: getText("ad:gearbox"),
        fuelType: getText("ad:fuel")
      };
    });
  }

  useEffect(() => {
    console.log('Fetching cars...');
    const fetchCars = async () => {
      try {
        const response = await fetch('https://wrangler-app.mobile-de-proxy-panba.workers.dev?customerNumber=864291', {
          headers: {
            'Accept': 'application/vnd.de.mobile.api+xml'
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

  const formatePrice = (price: number) => `${price.toLocaleString("de-DE")} €`;

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
                src={car.images}
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