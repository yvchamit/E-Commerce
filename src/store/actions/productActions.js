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
} from "../actionTypes";


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

export const toggleWishlist = (product) => ({ type: TOGGLE_WISHLIST, payload: product });

export const fetchProducts = (params = {}) => async (dispatch) => {
  dispatch({ type: "SET_FETCH_STATE", payload: "FETCHING" });
  try {
    const { category, filter, sort } = params;
    
    let url = "https://workintech-fe-ecommerce.onrender.com/products?limit=1000";
    
    if (category) url += `&category=${category}`;
    if (filter) url += `&filter=${filter}`;
    if (sort) url += `&sort=${sort}`;

    const response = await axios.get(url);
    
    dispatch({ type: "SET_PRODUCT_LIST", payload: response.data.products });
    dispatch({ type: "SET_TOTAL", payload: response.data.total });
    dispatch({ type: "SET_FETCH_STATE", payload: "FETCHED" });
  } catch (error) {
    dispatch({ type: "SET_FETCH_STATE", payload: "ERROR" });
  }
};
