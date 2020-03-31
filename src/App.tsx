import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListView from "./components/ListView";
import Search from "./components/Search";
import Menu from "./components/Menu";
import "./App.css";
import DetailedView from "./components/DetailedView";
import NewGladi from "./components/NewGladi";
import Home from "./components/Home";

interface Props {}

const App: React.FC<Props> = () => {
  const firebase = require("firebase");
  const firebaseConfig = {
    apiKey: "AIzaSyCoAIsbFurWtjEWFfhUofirhw6ejtpYtVA",
    authDomain: "gladibazis.firebaseapp.com",
    databaseURL: "https://gladibazis.firebaseio.com",
    projectId: "gladibazis",
    storageBucket: "gladibazis.appspot.com",
    messagingSenderId: "906180955378",
    appId: "1:906180955378:web:0bf40aa85ef0cafe96946b",
    measurementId: "G-F3F7GZ23WD"
  };
  return (
    <div className="outer">
      <Router>
        <Menu></Menu>
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/all_gladi" component={ListView}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/new_gladi" component={NewGladi}></Route>
            <Route path="/detailed_view/:name" component={DetailedView}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
