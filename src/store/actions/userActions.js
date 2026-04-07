import axios from 'axios';
import * as types from '../types/userTypes';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: types.LOGIN_START });

  try {
    const response = await axios.post(
      "https://workintech-fe-ecommerce.onrender.com/login", 
      credentials
    );

    const { token, ...user } = response.data;
    localStorage.setItem("token", token);

    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: { user, token }
    });

    return response; // Bileşende (Component) "then" ile işlem yapmak için
  } catch (error) {
    const errorMsg = error.response?.data?.message || "Login failed";
    dispatch({ type: types.LOGIN_FAILURE, payload: errorMsg });
    throw error;
  }
};