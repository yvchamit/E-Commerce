const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id,
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          count: updatedCart[existingProductIndex].count + 1,
        };
        return { ...state, cart: updatedCart };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          { count: 1, checked: true, product: action.payload },
        ],
      };
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    }

    case "UPDATE_CART_ITEM": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, count: Math.max(1, action.payload.count) }
            : item,
        ),
      };
    }
    case "TOGGLE_CHECK_ITEM": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item,
        ),
      };
    }

    case "CLEAR_CART": {
      const remainingItems = state.cart.filter(
        (item) => item.checked === false,
      );
      localStorage.setItem("cart", JSON.stringify(remainingItems));
      return {
        ...state,
        cart: remainingItems,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
