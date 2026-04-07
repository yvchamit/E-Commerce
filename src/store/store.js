import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk"; // Dikkat: "import thunk" değil "{ thunk }"
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
