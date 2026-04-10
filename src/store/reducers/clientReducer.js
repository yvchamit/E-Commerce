import { SET_LANGUAGE, SET_ROLES, SET_THEME, SET_USER } from "../actionTypes";

const initialClientState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: 'light',
  language: 'tr'
};

export const clientReducer = (state = initialClientState, action) => {
  switch (action.type) {
    case SET_USER: return { ...state, user: action.payload };
    case SET_ROLES: return { ...state, roles: action.payload };
    case SET_THEME: return { ...state, theme: action.payload };
    case SET_LANGUAGE: return { ...state, language: action.payload };
    default: return state;
  }
};

// Action Creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (lang) => ({ type: SET_LANGUAGE, payload: lang });