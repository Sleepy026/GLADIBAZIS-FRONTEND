import * as React from "react";
import "../style/menu.css";
import { Link } from "react-router-dom";
import logoImage from "../images/gladi6.png";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img src={logoImage} alt="logo" width="80" height="80"></img>
        <h1 className="logoName">GladiBazis</h1>
      </div>
      <div className="links">
        <Link className="link" to="/all_gladi">
          <i className="far fa-list-alt"></i>
          <span className="text">List All Varieties</span>
        </Link>
        <Link className="link" to="/search">
          <i className="fas fa-search"></i>
          <span className="text">Search</span>
        </Link>
        <Link className="link" to="/new_gladi">
          <i className="far fa-plus-square"></i>
          <span className="text">Create New Variety</span>
        </Link>
        <Link className="link" to="/">
          <i className="fas fa-random"></i>
          <span className="text">Free spot 1</span>
        </Link>
        <Link className="link" to="/">
          <i className="fas fa-random"></i>
          <span className="text">Free spot 2</span>
        </Link>
      </div>
    </div>
  );
};

export default App;
