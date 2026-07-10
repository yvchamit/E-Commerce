import { axiosInstance } from "../../lib/axiosInstance";
import { setRoles } from "../reducers/clientReducer";

export const fetchRolesAction = () => (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles.length === 0) {
    axiosInstance
      .get("/roles")
      .then((response) => dispatch(setRoles(response.data)))
      .catch((error) => console.error("Roller yüklenirken hata oluştu:", error));
  }
};