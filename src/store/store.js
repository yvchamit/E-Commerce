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

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
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
  shoppingCart: {
    cart: loadCartFromLS() || [],
    payment: {},
    address: {},
  },
};

export const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, logger),
);

let prevCart;
store.subscribe(() => {
  const cart = store.getState().shoppingCart.cart;
  if (cart !== prevCart) {
    localStorage.setItem("my_shopping_cart", JSON.stringify(cart));
    prevCart = cart;
  }
});
