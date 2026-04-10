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

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  cart: cartReducer,
});


// 1. Kaydedilmiş sepeti oku
const loadCartFromLS = () => {
  try {
    const serializedCart = localStorage.getItem("my_shopping_cart");
    return serializedCart ? JSON.parse(serializedCart) : undefined;
  } catch (e) {
    console.warn("Could not load cart from LS", e);
    return undefined;
  }
};

// 2. Başlangıç state'ini hazırla
const preloadedState = {
  cart: {
    cart: loadCartFromLS() || [],
  },
};

// 3. Store'u oluştur
export const store = createStore(
  rootReducer,
  preloadedState, // Başlangıçta bu veriyle yüklenir
  applyMiddleware(thunk, logger),
);

// 4. Her değişimde LS'ye kaydet
store.subscribe(() => {
  const cartData = store.getState().cart.cart;
  localStorage.setItem("my_shopping_cart", JSON.stringify(cartData));
});
