import { Route, Redirect } from "react-router-dom";
import { getStoredToken } from "../../store/actions/clientActions";

const ProtectedRoute = ({ ...rest }) => {
  const token = getStoredToken();

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;