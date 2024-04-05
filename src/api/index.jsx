import axios from "axios";
import { AUTH_API_URL, RECIPE_API_URL } from "../utils/constants";
import { firestore } from "../firebase/firebase";

export const fetchAllRecipes = async () => {
  const response = await axios.get(RECIPE_API_URL.allRecipes());
  const data = response.data.results;
  return data;
};

export const fetchRecipeDetails = async (id) => {
  const response = await axios.get(RECIPE_API_URL.recipeDetails(id));
  const data = response.data;
  return data;
};

export const userSignup = async (displayName, email, password) => {
  console.log("displayName,email,password", displayName, email, password);
  const response = await axios.post(AUTH_API_URL.signup(), {
    displayName,
    email,
    password,
  });
  const data = response.data;
  return data;
};

export const userSignin = async (email, password) => {
  const response = await axios.post(AUTH_API_URL.signin(), { email, password });
  const data = response.data;
  return data;
};

export const addToSaved = async (recipe, userEmail) => {
  try {
    await firestore
      .collection("users")
      .doc(userEmail)
      .collection("recipes")
      .add(recipe);
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
};

export const removeFromSaved = async (recipeId, userEmail) => {
  console.log("recipeId", recipeId);
  console.log("userEmail", userEmail);
  try {
    await firestore
      .collection("users")
      .doc(userEmail)
      .collection("recipes")
      .doc(recipeId)
      .delete();
  } catch (error) {
    console.error("Error removing recipe:", error);
  }
};
