import * as React from "react";
import "../style/menu.css";
import { Link } from "react-router-dom";
import logoImage from "../images/gladi6.png";
import { useContext } from "react";
import { AuthDataContext } from "../contexts/AuthDataContext";

interface Props {}

const App: React.FC<Props> = () => {
  const context = useContext(AuthDataContext);
  let linkStyle: string;
  let loginLogout: string;
  let loginLogoutFunc: () => void;
  return (
    context.authData
      ? ((linkStyle = "link"),
        (loginLogout = "LOGOUT"),
        (loginLogoutFunc = context.onLogout))
      : ((linkStyle = "hidden"),
        (loginLogout = "LOGIN"),
        (loginLogoutFunc = context.onLogin)),
    (
      <div>
        <div className="menu">
          <div className="logo">
            <img src={logoImage} alt="logo" width="80" height="80"></img>
            <h1 className="logoName">GladiBazis</h1>
          </div>
          <div className="links">
            <Link className={linkStyle} to="/all_gladi">
              <i className="far fa-list-alt"></i>
              <span className="text">List All Varieties</span>
            </Link>
            {/* <Link className={linkStyle} to="/search">
              <i className="fas fa-search"></i>
              <span className="text">Search</span>
            </Link> */}
            <Link className={linkStyle} to="/new_gladi">
              <i className="far fa-plus-square"></i>
              <span className="text">Create New Variety</span>
            </Link>
            <Link className={linkStyle} to="/">
              <i className="fas fa-random"></i>
              <span className="text">Free spot 1</span>
            </Link>
            <Link className="link" onClick={loginLogoutFunc} to="/auth">
              <i className="fab fa-google-plus-square"></i>
              <span className="text">{loginLogout}</span>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default App;
