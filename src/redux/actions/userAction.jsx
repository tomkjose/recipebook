export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FALIURE = "FETCH_USER_FALIURE";
export const LOGOUT_USER = "LOGOUT_USER";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (userInfo) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: userInfo,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FALIURE,
    payload: error,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
