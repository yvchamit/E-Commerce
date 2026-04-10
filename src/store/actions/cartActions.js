export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const updateCartItem = (productId, count) => ({
  type: "UPDATE_CART_ITEM",
  payload: { productId, count },
});
export const toggleCheckItem = (productId) => ({
  type: "TOGGLE_CHECK_ITEM",
  payload: productId,
});