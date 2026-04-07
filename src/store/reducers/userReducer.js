import * as types from '../types/userTypes';

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return { ...state, loading: true, error: null };
    case types.LOGIN_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        user: action.payload.user, 
        token: action.payload.token,
        error: null 
      };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case types.LOGOUT:
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

export default userReducer;