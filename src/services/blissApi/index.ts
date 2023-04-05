import axios from "axios";
import { ENDPOINTS } from "../apiConfig";
import { Question, SearchParams } from "../types";

// GET methods

export const fetchHealth = async () => {
  try {
    const response = await axios.get(ENDPOINTS.HEALTH);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchQuestions = async (
  searchParams?: SearchParams
): Promise<Question[]> => {
  try {
    const params = searchParams
      ? new URLSearchParams(Object.fromEntries(Object.entries(searchParams)))
      : undefined;
    const response = await axios.get(`${ENDPOINTS.QUESTIONS}`, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchQuestion = async (id?: number | string): Promise<Question> => {
  try {
    const response = await axios.get(`${ENDPOINTS.QUESTIONS}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
