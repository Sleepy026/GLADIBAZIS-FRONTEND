import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useContext } from "react";
import { AuthDataContext } from "../contexts/AuthDataContext";

export const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const context = useContext(AuthDataContext);
  console.log(context.authData);
  return context.authData ? (
    <Route {...rest} component={component} />
  ) : (
    <Redirect to="/auth" />
  );
};
