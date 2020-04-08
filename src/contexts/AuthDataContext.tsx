import React, { createContext, useState, useEffect, useContext } from "react";

import firebase from "firebase";
import { Redirect } from "react-router";

export const AuthDataContext = createContext({
  onLogin: () => {},
  onLogout: () => {},
  authData: {} || null,
});

const initialAuthData = null;
interface Propsz {}

const AuthDataProvider: React.FC<Propsz> = (props) => {
  const [authData, setAuthData] = useState<
    firebase.auth.UserCredential | firebase.User | {} | null
  >(initialAuthData);

  useEffect(() => {
    const currentAuthData = firebase.auth().currentUser;
    if (currentAuthData) {
      setAuthData(currentAuthData);
    }
  }, []);

  function onLogin(): void {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (newAuthData) {
        setAuthData(newAuthData);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  }

  function onLogout(): void {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setAuthData(initialAuthData);
      })
      .catch(function (error) {
        // An error happened.
      });
  }

  return (
    <AuthDataContext.Provider value={{ authData, onLogin, onLogout }}>
      {props.children}
    </AuthDataContext.Provider>
  );
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
