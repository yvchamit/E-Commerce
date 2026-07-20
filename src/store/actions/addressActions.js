import { toast } from "react-toastify";
import { axiosInstance } from "../../lib/axiosInstance";
import { SET_ADDRESS_LIST } from "../actionTypes";
import { setAddress } from "./shoppingCartActions";

export const setAddressList = (addressList) => ({
  type: SET_ADDRESS_LIST,
  payload: addressList,
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

export const updateAddress = (address) => (dispatch) => {
  return axiosInstance.put("/user/address", address).then(() => {
    dispatch(fetchAddresses());
  });
};

export const deleteAddress = (addressId) => (dispatch, getState) => {
  return axiosInstance
    .delete(`/user/address/${addressId}`)
    .then(() => {
      dispatch(fetchAddresses());
      const selected = getState().shoppingCart.address;
      if (selected?.id === addressId) {
        dispatch(setAddress({}));
      }
    })
    .catch((err) => {
      console.error("Adres silinemedi:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Adres silinemedi.");
    });
};
