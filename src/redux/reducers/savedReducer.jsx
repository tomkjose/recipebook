import {
  ADD_SAVED,
  REMOVE_SAVED,
  FETCH_SAVED_REQUEST,
  FETCH_SAVED_SUCCESS,
  FETCH_SAVED_FAILURE,
} from "../actions/savedAction.jsx";

const initialState = {
  saved: [],
  loading: false,
  error: null,
};

const savedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SAVED:
      return {
        ...state,
        saved: [...state.saved, action.payload],
      };
    case REMOVE_SAVED:
      return {
        ...state,
        saved: state.saved.filter(
          (recipeId) => recipeId.uniqueId !== action.payload
        ),
      };
    case FETCH_SAVED_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SAVED_SUCCESS:
      return {
        ...state,
        loading: false,
        saved: action.payload,
        error: null,
      };
    case FETCH_SAVED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default savedReducer;
