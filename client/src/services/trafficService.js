import axios from 'axios';

const API_BASE_URL = '/traffic'; // Because Vite proxy forwards to backend server

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/countries`);
    return response;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

export const fetchVehicles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/vehicles`);
    return response;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};
