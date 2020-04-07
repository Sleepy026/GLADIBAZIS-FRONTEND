import * as React from "react";
import { AuthDataContext } from "../contexts/AuthDataContext";
import { useContext } from "react";

interface Props {}

const Login: React.FC<Props> = () => {
  const context = useContext(AuthDataContext);
  return (
    <div>
      <button type="button" onClick={context.onLogin}>
        GOOGLE LOGIN
      </button>
      <button type="button" onClick={context.onLogout}>
        GOOGLE LOGOUT
      </button>
      <div className="messageContainer">
        <p className="message"></p>
      </div>
    </div>
  );
};

export default Login;
