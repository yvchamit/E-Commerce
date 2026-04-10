import {
  SET_CATEGORIES,
  SET_FETCH_STATE,
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  TOGGLE_WISHLIST,
} from "../actionTypes";

const initialProductState = {
  categories: [],
  productList: [],
  wishlist: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED", // "NOT_FETCHED", "FETCHING", "FETCHED", "FAILED"
};



export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case TOGGLE_WISHLIST: {
      // Ürün zaten favorilerde mi kontrol et
      const itemExists = state.wishlist.find(
        (item) => item.id === action.payload.id,
      );

      if (itemExists) {
        // Varsa listeden çıkar
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.id !== action.payload.id,
          ),
        };
      } else {
        // Yoksa listeye ekle
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
      }
    }
    default:
      return state;
  }
};

// Action Creators
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
