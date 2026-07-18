import {
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
  SET_USER,
  SET_ADDRESS_LIST,
  LOGOUT,
} from "../actionTypes";

const initialClientState = {
  user: {},
  addressList: [],
  roles: [],
  theme: "light",
  language: "tr",
};

export const clientReducer = (state = initialClientState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_ADDRESS_LIST:
      return { ...state, addressList: action.payload };
    case LOGOUT:
      return { ...state, user: {}, addressList: [], roles: [] };
    default:
      return state;
  }
};
