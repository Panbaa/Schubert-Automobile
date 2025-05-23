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
        gearbox: carElement.getElementsByTagName('fuel')[0].textContent === 'AUTOMATIC_GEAR' ? 'Automatik' : 'Schaltgetriebe',
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

  const formatePrice = (price: number) => `${price.toLocaleString("de-DE")} €`;

  return (
    <div className="mobilede-cars container mx-auto px-4 py-12">
      <div className='pb-12 text-center'>
        {cars.length === 0 ? (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-zinc-800 dark:text-white">Keine Fahrzeuge verfügbar</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Leider haben wir aktuell keine Fahrzeuge im Angebot. <br />
              Das tatsächliche Angebot kann vom Online-Angebot abweichen, also schauen Sie gerne persönlich bei uns vorbei.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Hier finden Sie eine Auswahl unseres Online-Angebots an Fahrzeugen. <br />
              Das tatsächliche Angebot kann vom Online-Angebot abweichen, also schauen Sie gerne persönlich bei uns vorbei.
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <a
            key={index}
            className="group relative bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1"
            href={car.detailPageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
              <img
                className="w-full h-full object-cover transform transition-transform duration-700"
                src={car.image}
                alt={`${car.make} ${car.modelDescription}`}
              />
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 bg-zinc-900/90 rounded-full text-white font-semibold shadow-lg">
                  {formatePrice(car.price)}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {car.title}
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Erstzulassung</span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{car.firstRegistrationDate}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Kilometer</span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{car.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Getriebe</span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{car.gearbox}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">HU/AU</span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">
                      {car.newHuAu === "true" ? (
                        <span className="text-green-600 dark:text-green-400">Neu</span>
                      ) : (
                        car.generalInspectionDate
                      )}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Leistung</span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{car.power} PS</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Kraftstoff</span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{car.fuelType}</span>
                  </div>
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