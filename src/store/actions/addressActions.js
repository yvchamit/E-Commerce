import { axiosInstance } from "../../lib/axiosInstance";
import { SET_ADDRESS_LIST, SET_SELECTED_ADDRESS } from "../actionTypes";

export const setAddressList = (addressList) => ({
  type: SET_ADDRESS_LIST,
  payload: addressList,
});

export const setSelectedAddress = (address) => ({
  type: SET_SELECTED_ADDRESS,
  payload: address,
});

export const fetchAddresses = () => (dispatch) => {
  axiosInstance
    .get("/user/address")
    .then((res) => {
      dispatch(setAddressList(res.data));
    })
    .catch((err) => {
      console.error("Adres listesi çekilemedi:", err);
    });
};

export const addAddress = (addressData) => (dispatch) => {
  return axiosInstance.post("/user/address", addressData).then((res) => {
    dispatch(fetchAddresses());
  });
};

export const updateAddress = (addressData) => (dispatch) => {
  return axiosInstance.put("/user/address", addressData).then((res) => {
    dispatch(fetchAddresses());
  });
};

export const deleteAddress = (addressId) => (dispatch) => {
  return axiosInstance.delete(`/user/address/${addressId}`).then((res) => {
    dispatch(fetchAddresses());
  });
};
