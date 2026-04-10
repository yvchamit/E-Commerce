import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  REMOVE_FROM_CART,
  TOGGLE_CHECK_ITEM,
  UPDATE_CART_ITEM,
  CLEAR_CART,
} from "../actionTypes";

export const setCart = (cart) => ({ type: SET_CART, payload: cart });
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const toggleCheckItem = (productId) => {
  return {
    type: TOGGLE_CHECK_ITEM,
    payload: productId,
  };
};

export const updateCartItem = (productId, count) => {
  return {
    type: UPDATE_CART_ITEM,
    payload: { productId, count },
  };
};

export const clearCart = () => ({ type: CLEAR_CART });
