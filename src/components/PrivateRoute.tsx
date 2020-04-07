import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useContext } from "react";
import { AuthDataContext } from "../contexts/AuthDataContext";

export const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  user,
  ...rest
}: any) => {
  const context = useContext(AuthDataContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        context.authData ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};
