// src/api/recipeApi.js
import axios from "axios";

const API_KEY = "your_edamam_api_key";
const API_ID = "your_edamam_api_id";
const BASE_URL = "https://api.edamam.com";

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: query,
        app_id: API_ID,
        app_key: API_KEY,
        to: 10, // Number of recipes to return
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
