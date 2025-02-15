import axios from 'axios';

const username = import.meta.env.VITE_MOBILEDE_USERNAME;
const password = import.meta.env.VITE_MOBILEDE_PASSWORD;
const sellerId = import.meta.env.VITE_MOBILEDE_SELLER_ID;

const auth = btoa(`${username}:${password}`);

const apiClient = axios.create({
  baseURL: 'https://services.mobile.de',
  headers: {
    Authorization: `Basic ${auth}`,
    Accept: 'application/json',
  },
});

export const fetchListedCars = async () => {
  try {
    const response = await apiClient.get(`/1.0.0/ad/search?sellerId=${sellerId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
