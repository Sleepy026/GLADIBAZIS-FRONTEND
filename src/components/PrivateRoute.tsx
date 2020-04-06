import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

export const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  user,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};
