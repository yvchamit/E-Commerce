import axios from "axios";
import { toast } from "react-toastify";
import { LOGIN_SUCCESS, SET_USER, setUser } from "../actionTypes";

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) return; // Token yoksa zorlama

  try {
    // Token'ı header olarak gönderiyoruz (Genelde API bunu bekler)
    const response = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/verify",
      {
        headers: {
          Authorization: token,
        },
      },
    );

    const { token: newToken, ...user } = response.data;

    // State'i tekrar doldur
    dispatch(setUser(user));

    // Opsiyonel: Token yenilendiyse güncelle
    localStorage.setItem("token", newToken);
  } catch (error) {
    console.error("Token geçersiz:", error);
    localStorage.removeItem("token"); // Geçersizse sil ki döngüye girmesin
  }
};

export const loginUserAction = (formData, rememberMe) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://workintech-fe-ecommerce.onrender.com/login",
      formData,
    );

    const { token, name, email, role_id } = response.data;
    const user = { name, email, role_id };

    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch({ type: SET_USER, payload: user });

    if (rememberMe) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }

    toast.success(`Hoş geldin ${name}!`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return response.data;
  } catch (error) {
    const errorMsg =
      error.response?.data?.message ||
      "Giriş başarısız. Bilgilerinizi kontrol edin.";
    toast.error(errorMsg);
    throw error;
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");

  dispatch({ type: SET_USER, payload: {} });

  toast.success("Başarıyla çıkış yapıldı.");
};
