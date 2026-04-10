const initialState = {
  addressList: [],
  selectedAddress: null,
};

export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADDRESS_LIST":
      return { ...state, addressList: action.payload };
    case "SET_SELECTED_ADDRESS":
      return { ...state, selectedAddress: action.payload };
    default:
      return state;
  }
};