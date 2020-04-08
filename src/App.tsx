import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListView from "./components/ListView";
import Search from "./components/Search";
import Menu from "./components/Menu";
import "./App.css";
import DetailedView from "./components/DetailedView";
import NewGladi from "./components/NewGladi";
import Home from "./components/Home";
import AuthDataProvider from "./contexts/AuthDataContext";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import GladiProvider, { GladiContext } from "./contexts/GladiContext";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="outer">
      <Router>
        <AuthDataProvider>
          <Menu></Menu>
          <div className="body">
            <Switch>
              <Route path="/auth" component={Login}></Route>
              <PrivateRoute exact path="/" component={Home}></PrivateRoute>
              <GladiProvider>
                <PrivateRoute
                  path="/all_gladi"
                  component={ListView}
                ></PrivateRoute>
              </GladiProvider>
              <PrivateRoute
                path="/new_gladi"
                component={NewGladi}
              ></PrivateRoute>
              <PrivateRoute
                path="/detailed_view/:name"
                component={DetailedView}
              ></PrivateRoute>
            </Switch>
          </div>
        </AuthDataProvider>
      </Router>
    </div>
  );
};

export default App;
