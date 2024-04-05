const API_KEY = process.env.REACT_APP_API_KEY;
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
const RECIPE_API_ROOT = "https://api.spoonacular.com/";
const AUTH_API_ROOT = "https://identitytoolkit.googleapis.com/v1/";

export const RECIPE_API_URL = {
  allRecipes: () =>
    `${RECIPE_API_ROOT}recipes/complexSearch?apiKey=${API_KEY}&cuisine=american&number=30`,
  recipeDetails: (recipeId) =>
    `${RECIPE_API_ROOT}recipes/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=false&addWinePairing=false`,
};

export const AUTH_API_URL = {
  signup: () => `${AUTH_API_ROOT}accounts:signUp?key=${AUTH_KEY}`,
  signin: () => `${AUTH_API_ROOT}accounts:signInWithPassword?key=${AUTH_KEY}`,
};
