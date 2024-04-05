import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FALIURE,
} from "../actions/recipesAction";

const initialValue = {
  recipes: [],
  loading: false,
  error: null,
};
const recipesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_RECIPES_FALIURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default recipesReducer;
