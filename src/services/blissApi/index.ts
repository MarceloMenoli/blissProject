import axios from 'axios';
import { ENDPOINTS } from '../apiConfig';

const fetchHealth = async () => {
  try {
    const response = await axios.get(ENDPOINTS.HEALTH);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchHealth;