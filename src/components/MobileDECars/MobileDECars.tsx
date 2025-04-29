import { useEffect, useState } from 'react';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const MobileDECars = () => {
  interface Car {
    images?: { xxxl?: string }[];
    modelDescription?: string;
    make?: string;
    model?: string;
    price?: {
      consumerPriceGross?: number;
      currency?: string;
    };
    detailPageUrl?: string;
  }

  const [cars, setCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState({ make: '', model: '', priceMin: '', priceMax: '' });
  let tempJson = {};

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('https://services.mobile.de/search-api/search?customerNumber=864291', {
          auth: {
            username: import.meta.env.VITE_MOBILEDE_USERNAME,
            password: import.meta.env.VITE_MOBILEDE_PASSWORD,
          },
        });

        const jsonResult = await parseStringPromise(response.data);
        tempJson = jsonResult;
        setCars(jsonResult['search:search-result']?.['search:ads']?.[0]?.['ad:ad'] || []);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, [filters]);

  const handleFilterChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="mobilede-cars">
      <h1>Available Cars</h1>
      <h1>{cars.length}</h1>
      <h1>{JSON.stringify(tempJson)}</h1>
      <div className="filters">
        <input
          type="text"
          name="make"
          placeholder="Make"
          value={filters.make}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={filters.model}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="priceMin"
          placeholder="Min Price"
          value={filters.priceMin}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="priceMax"
          placeholder="Max Price"
          value={filters.priceMax}
          onChange={handleFilterChange}
        />
      </div>
      <div className="car-list">
        {cars.map((car, index) => (
          <div key={index} className="car-item">
            <img src={car.images?.[0]?.xxxl} alt={car.modelDescription} />
            <h2>{car.make} {car.model}</h2>
            <p>{car.price?.consumerPriceGross} {car.price?.currency}</p>
            <a href={car.detailPageUrl} target="_blank" rel="noopener noreferrer">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileDECars;

