export const FETCH_RECIPES_REQUEST = "FETCH_RECIPES_REQUEST";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FALIURE = "FETCH_RECIPES_FALIURE";

export const fetchRecipesRequest = () => {
  return {
    type: FETCH_RECIPES_REQUEST,
  };
};

export const fetchRecipesSuccess = (recipes) => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes,
  };
};

export const fetchRecipesFaliure = (error) => {
  return {
    type: FETCH_RECIPES_FALIURE,
    payload: error,
  };
};
