import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { clientReducer } from "./reducers/clientReducer";
import cartReducer from "./reducers/cartReducer";
import { addressReducer } from "./reducers/addressReducer";
import { paymentReducer } from "./reducers/paymentReducer";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  cart: cartReducer,
  address: addressReducer,
  payment: paymentReducer,
});


const loadCartFromLS = () => {
  try {
    const serializedCart = localStorage.getItem("my_shopping_cart");
    return serializedCart ? JSON.parse(serializedCart) : undefined;
  } catch (e) {
    console.warn("Could not load cart from LS", e);
    return undefined;
  }
};

const preloadedState = {
  cart: {
    cart: loadCartFromLS() || [],
  },
};

export const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, logger),
);

store.subscribe(() => {
  const cartData = store.getState().cart.cart;
  localStorage.setItem("my_shopping_cart", JSON.stringify(cartData));
});
