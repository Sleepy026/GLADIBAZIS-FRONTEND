import React, { createContext, useState, useEffect, useContext } from "react";

import firebase from "firebase";

export const AuthDataContext = createContext({
  onLogin: () => {},
  onLogout: () => {},
  authData: {},
});

const initialAuthData = {};
interface Propsz {}

const AuthDataProvider: React.FC<Propsz> = (props) => {
  const [authData, setAuthData] = useState(initialAuthData);

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
        console.log(newAuthData);
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
