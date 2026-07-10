import { axiosInstance } from "../../lib/axiosInstance";
import { setCategories } from ".../actions/productActions";

export const fetchCategories = () => async (dispatch) => {
  const cached = sessionStorage.getItem("categories");
  if (cached) {
    dispatch(setCategories(JSON.parse(cached)));
  }

  try {
    const res = await axiosInstance.get("/categories");
    dispatch(setCategories(res.data));
    sessionStorage.setItem("categories", JSON.stringify(res.data));
  } catch (err) {
    console.error("Kategoriler alınamadı:", err);
  }
};
