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

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="outer">
      <Router>
        <Menu></Menu>
        <div className="body">
          <Switch>
            <AuthDataProvider>
              <Route exact path="/" component={Home}></Route>
              <Route path="/all_gladi" component={ListView}></Route>
              <Route path="/search" component={Search}></Route>
              <Route path="/new_gladi" component={NewGladi}></Route>
              <Route
                path="/detailed_view/:name"
                component={DetailedView}
              ></Route>
            </AuthDataProvider>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
