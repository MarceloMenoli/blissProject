import axios from 'axios';
import { ENDPOINTS } from '../apiConfig';
import { Question } from '../types';

// GET methods

export const fetchHealth = async () => {
  try {
    const response = await axios.get(ENDPOINTS.HEALTH);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }
};


export const fetchQuestions = async ():Promise<Question[]> => {
  try {
    const response = await axios.get(ENDPOINTS.QUESTIONS);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }
};
