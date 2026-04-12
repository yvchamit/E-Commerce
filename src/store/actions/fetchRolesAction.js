import axios from 'axios';

export const fetchRolesAction = () => (dispatch, getState, setRoles) => {
  const { roles } = getState().client;

  if (roles.length === 0) {
    axios.get('https://api-your-endpoint.com/roles')
      .then(response => {
        dispatch(setRoles(response.data));
      })
      .catch(error => {
        console.error("Roller yüklenirken hata oluştu:", error);
      });
  }
};