import * as React from "react";
import { AuthDataContext } from "../contexts/AuthDataContext";
import { useContext } from "react";
import { Redirect } from "react-router";

interface Props {}

const Login: React.FC<Props> = () => {
  const context = useContext(AuthDataContext);
  return !context.authData ? (
    <div className="loginContainer">
      <div className="messageContainer">
        <p className="message">Welcome!</p>
        <p className="message">
          Please login to get access to this wonderul Gladiolus database!
        </p>
      </div>
    </div>
  ) : (
    <Redirect to="/"></Redirect>
  );
};

export default Login;
