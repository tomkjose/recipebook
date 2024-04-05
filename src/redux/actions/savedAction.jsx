// actions.js

import { firestore } from "../../firebase/firebase";

export const FETCH_SAVED_REQUEST = "FETCH_SAVED_REQUEST";
export const FETCH_SAVED_SUCCESS = "FETCH_SAVED_SUCCESS";
export const FETCH_SAVED_FAILURE = "FETCH_SAVED_FAILURE";

export const fetchSavedRecipes = (userEmail) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_SAVED_REQUEST });

    try {
      const recipesRef = firestore
        .collection("users")
        .doc(userEmail)
        .collection("recipes");

      const snapshot = await recipesRef.get();
      const recipes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch({ type: FETCH_SAVED_SUCCESS, payload: recipes });
    } catch (error) {
      dispatch({ type: FETCH_SAVED_FAILURE, payload: error.message });
    }
  };
};
