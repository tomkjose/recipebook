import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { addToSaved, removeFromSaved } from "../../api";

export const ADD_SAVED = "ADD_SAVED";
export const REMOVE_SAVED = "REMOVE_SAVED";
export const FETCH_SAVED_REQUEST = "FETCH_SAVED_REQUEST";
export const FETCH_SAVED_SUCCESS = "FETCH_SAVED_SUCCESS";
export const FETCH_SAVED_FAILURE = "FETCH_SAVED_FAILURE";

export const fetchSavedRecipes = (userId) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_SAVED_REQUEST });

    try {
      const savedCollection = collection(db, `users/${userId}/recipes`);
      const querySnapshot = await getDocs(savedCollection);

      const saved = [];
      querySnapshot.forEach((doc) => {
        saved.push({ uniqueId: doc.id, ...doc.data() });
      });
      console.log("saved", saved);
      dispatch({ type: FETCH_SAVED_SUCCESS, payload: saved });
    } catch (error) {
      dispatch({ type: FETCH_SAVED_FAILURE, payload: error.message });
    }
  };
};

export const addSaved = (recipe, userId) => async (dispatch) => {
  try {
    const uniqueId = await addToSaved(recipe, userId);
    console.log("uniqueId", uniqueId);
    dispatch({
      type: ADD_SAVED,
      payload: { uniqueId, ...recipe },
    });
  } catch (error) {
    console.error("Error adding to saved:", error);
  }
};

export const removeSaved = (recipeId, userId) => async (dispatch) => {
  console.log("recipeId", recipeId);
  try {
    await removeFromSaved(recipeId, userId);
    dispatch({
      type: REMOVE_SAVED,
      payload: recipeId,
    });
  } catch (error) {
    console.error("Error removing from saved:", error);
  }
};
