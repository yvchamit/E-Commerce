import axios from 'axios'; // Axios kullandığını varsayıyorum

export const fetchRolesAction = () => (dispatch, getState) => {
  const { roles } = getState().client;

  // Sadece roller boşsa (ihtiyaç varsa) tetikle
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