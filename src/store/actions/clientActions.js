import { toast } from "react-toastify";
import { axiosInstance } from "../../lib/axiosInstance";
import { SET_LANGUAGE, SET_ROLES, SET_THEME, SET_USER } from "../actionTypes";


export const getStoredToken = () =>
  localStorage.getItem("token") || sessionStorage.getItem("token");

const clearStoredToken = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export const verifyToken = () => async (dispatch) => {
  const token = getStoredToken();
  if (!token) return;
  try {
    const response = await axiosInstance.get("/verify", {
      headers: { Authorization: token },
    });
    const { token: newToken, ...user } = response.data;
    dispatch(setUser(user));
    if (localStorage.getItem("token")) {
      localStorage.setItem("token", newToken);
    } else {
      sessionStorage.setItem("token", newToken);
    }
    axiosInstance.defaults.headers.common["Authorization"] = newToken;
  } catch (error) {
    console.error("Token geçersiz:", error);
    clearStoredToken();
  }
};

export const loginUserAction = (formData, rememberMe) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/login", formData);
    const { token, name, email, role_id } = response.data;

    dispatch(setUser({ name, email, role_id }));
    axiosInstance.defaults.headers.common["Authorization"] = token;

    if (rememberMe) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }

    toast.success(`Hoş geldin ${name}!`, { autoClose: 1500 });
    return response.data;
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
        "Giriş başarısız. Bilgilerinizi kontrol edin.",
    );
    throw error;
  }
};

export const logoutUser = () => (dispatch) => {
  clearStoredToken();
  dispatch(setUser({}));
  toast.success("Başarıyla çıkış yapıldı.");
};


export const setUser = (user) => ({ type: SET_USER, payload: user });

export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });

export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });

export const setLanguage = (lang) => ({ type: SET_LANGUAGE, payload: lang });