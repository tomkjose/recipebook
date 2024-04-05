import {
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
