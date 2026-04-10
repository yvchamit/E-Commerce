import { axiosInstance } from "../../lib/axiosInstance";
import { SET_CARD_LIST } from "../actionTypes";

export const fetchCards = () => (dispatch) => {
  axiosInstance
    .get("/user/card")
    .then((res) => {
      dispatch({ type: SET_CARD_LIST, payload: res.data });
    })
    .catch((err) => console.error("Kartlar çekilemedi:", err));
};

export const saveCard = (cardData) => (dispatch) => {
  return axiosInstance
    .post("/user/card", cardData)
    .then((res) => {
      dispatch(fetchCards());

      return res.data;
    })
    .catch((err) => {
      console.error("Kart kaydedilemedi:", err);
      throw err;
    });
};

export const deleteCard = (cardId) => (dispatch) => {
  return axiosInstance
    .delete(`/user/card/${cardId}`) // Dikkat: cardId'nin doğru geldiğinden emin ol
    .then(() => {
      console.log("Kart başarıyla silindi");
      dispatch(fetchCards()); // Listeyi yenile
    })
    .catch((err) => {
      console.error(
        "Kart silinemedi. Hata detayı:",
        err.response?.data || err.message,
      );
    });
};