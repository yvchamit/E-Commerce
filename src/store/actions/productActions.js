import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  TOGGLE_WISHLIST,
} from "../actionTypes";
import { axiosInstance } from "../../lib/axiosInstance";

const LIMIT = 25;

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const toggleWishlist = (product) => ({
  type: TOGGLE_WISHLIST,
  payload: product,
});


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

export const fetchProducts = (params = {}) => {
  const { category, filter, sort, page = 1 } = params;
  return (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    const offset = (page - 1) * LIMIT;

    axiosInstance
      .get("/products", {
        params: { limit: LIMIT, offset, category, filter, sort },
      })
      .then((res) => {
        dispatch(setProductList(res.data.products));
        dispatch(setTotal(res.data.total));
        dispatch(setFetchState("FETCHED"));
      })
      .catch((err) => {
        console.error("API Hatası:", err);
        dispatch(setFetchState("FAILED"));
      });
  };
};
