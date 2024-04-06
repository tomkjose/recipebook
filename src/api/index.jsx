import axios from "axios";
import { AUTH_API_URL, RECIPE_API_URL } from "../utils/constants";

import { db } from "../firebase/firebase";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";

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

export const addToSaved = async (recipe, userId) => {
  try {
    const savedCollection = collection(db, `users/${userId}/recipes`);
    const docRef = await addDoc(savedCollection, recipe);
    return docRef.id;
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
};

export const removeFromSaved = async (recipeId, userId) => {
  try {
    console.log("recipeId", recipeId);
    console.log("userId", userId);
    const savedCollection = collection(db, `users/${userId}/recipes`);
    console.log("Saved Collection:", savedCollection);

    const postDoc = doc(savedCollection, recipeId);
    console.log("Document Reference:", postDoc);

    await deleteDoc(postDoc);
    console.log("Recipe removed successfully!");
  } catch (error) {
    console.error("Error removing from Saved:", error);
  }
};
