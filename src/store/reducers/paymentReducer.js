import { SET_CARD_LIST } from "../actionTypes";


const initialState = {
  cardList: [],
  selectedCard: null,
  loading: false,
  error: null
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD_LIST:
      return { 
        ...state, 
        cardList: action.payload,
        loading: false 
      };
      
    case "SET_SELECTED_CARD":
      return {
        ...state,
        selectedCard: action.payload
      };

    default:
      return state;
  }
};