import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FALIURE,
  LOGOUT_USER,
} from "../actions/userAction";

const initialValue = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_USER_FALIURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT_USER:
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
