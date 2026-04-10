import axios from "axios";
import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  TOGGLE_WISHLIST,
  SET_TOTAL_PRODUCT_COUNT,
} from "../actionTypes";
import { axiosInstance } from "../../lib/axiosInstance";

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

export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });
  try {
    const res = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/categories",
    );
    dispatch({ type: SET_CATEGORIES, payload: res.data });
    dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });
  } catch (err) {
    console.error("Kategoriler yüklenemedi:", err);
    dispatch({ type: SET_FETCH_STATE, payload: "ERROR" });
  }
};

export const toggleWishlist = (product) => ({
  type: TOGGLE_WISHLIST,
  payload: product,
});

const LIMIT = 25;

export const setTotalProductCount = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const fetchProducts = (params = {}) => {
  // Parametreleri obje olarak al
  const { category, filter, sort, page = 1 } = params; // İçinden çek

  return (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    const LIMIT = 25;
    const offset = (page - 1) * LIMIT;

    let url = `https://workintech-fe-ecommerce.onrender.com/products?limit=${LIMIT}&offset=${offset}`;

    if (category) url += `&category=${category}`;
    if (filter) url += `&filter=${filter}`;
    if (sort) url += `&sort=${sort}`;

    axiosInstance
      .get(url)
      .then((res) => {
        dispatch(setProductList(res.data.products));
        dispatch(setTotalProductCount(res.data.total));
        dispatch(setFetchState("FETCHED"));
      })
      .catch((err) => {
        console.error("API Hatası:", err); // Konsola bakarak hatayı görebilirsin
        dispatch(setFetchState("ERROR"));
      });
  };
};
