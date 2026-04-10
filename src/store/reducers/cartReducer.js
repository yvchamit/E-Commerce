const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // <--- Süslü parantez başladığı yer
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
    } // <--- Süslü parantez bittiği yer

    case "REMOVE_FROM_CART": {
      // <--- Burada da kullanmak güvenlidir
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
            ? { ...item, count: Math.max(1, action.payload.count) } // 1'in altına düşmesin
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

    default:
      return state;
  }
};

export default cartReducer;
