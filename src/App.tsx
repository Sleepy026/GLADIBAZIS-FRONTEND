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
import MyContext from "./contexts/MyContext";
import firebase from "firebase";
import { useState, useEffect } from "react";

interface Props {}

const App: React.FC<Props> = () => {
  // const [authData, setAuthData] = useState({});

  // useEffect(() => {
  //   const currentAuthData = firebase.auth().currentUser;
  //   if (currentAuthData) {
  //     setAuthData(currentAuthData);
  //   }
  // }, []);

  // function onLogin() {
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(function (newAuthData) {
  //       console.log(newAuthData);
  //       setAuthData(newAuthData);
  //     })
  //     .catch(function (error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       var email = error.email;
  //       var credential = error.credential;
  //     });
  //   return "Login";
  // }

  // function onLogout() {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(function () {
  //       setAuthData({});
  //     })
  //     .catch(function (error) {
  //       // An error happened.
  //     });
  //   return "Logout";
  // }
  return (
    <div className="outer">
      <Router>
        <Menu></Menu>
        <div className="body">
          <Switch>
            {/* <MyContext.Provider value={{ onLogin, onLogout, authData }}> */}
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
            {/* </MyContext.Provider> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
