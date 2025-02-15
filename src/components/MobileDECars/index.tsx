import React, { useEffect, useState } from 'react';
import { fetchListedCars } from '../../services/mobileDeApi';

interface Car {
  id: string;
  title: string;
  price: number;
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchListedCars();
        setCars(data);
      } catch (err) {
        setError('Failed to fetch cars.');
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Available Cars</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.title} - €{car.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
