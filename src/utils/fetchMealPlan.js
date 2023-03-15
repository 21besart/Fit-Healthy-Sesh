export const SPOONACULAR_API_URL = "https://api.spoonacular.com";

export const fetchMealPlan = async url => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
