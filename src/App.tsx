import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListView from "./components/ListView";
import Search from "./components/Search";
import Menu from "./components/Menu";
import "./App.css";
import DetailedView from "./components/DetailedView";
import NewGladi from "./components/NewGladi";
import Home from "./components/Home";
import firebase from "firebase";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { useState, useEffect } from "react";

interface Props {}

const App: React.FC<Props> = () => {
  console.log(firebase.app());
  const [user, setUser] = useState<firebase.User | null>(null);

  function checkToken() {
    const request = firebase.auth().currentUser;
    setUser(request);
    console.log(request);
  }
  useEffect(checkToken, []);
  return (
    <div className="outer">
      <Router>
        <Menu></Menu>
        <div className="body">
          <Switch>
            <Route path="/auth" component={Login}></Route>
            <PrivateRoute
              exact
              path="/"
              // user={user}
              component={Home}
            ></PrivateRoute>
            <PrivateRoute path="/all_gladi" component={ListView}></PrivateRoute>
            <PrivateRoute path="/search" component={Search}></PrivateRoute>
            <PrivateRoute path="/new_gladi" component={NewGladi}></PrivateRoute>
            <PrivateRoute
              path="/detailed_view/:name"
              component={DetailedView}
            ></PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
