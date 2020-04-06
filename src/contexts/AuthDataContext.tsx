import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";

import firebase from "firebase";

export const AuthDataContext = createContext(null);

const initialAuthData = {};

interface Props {}

const AuthDataProvider: React.FC<Props> = () => {
  const [authData, setAuthData] = useState(initialAuthData);

  /* The first time the component is rendered, it tries to
   * fetch the auth data from a source, like a cookie or
   * the localStorage.
   */
  useEffect(() => {
    const currentAuthData = firebase.auth().currentUser;
    if (currentAuthData) {
      setAuthData(currentAuthData);
    }
  }, []);

  const onLogin = () => {
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
  };

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setAuthData(initialAuthData);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  //   const onLogout = () => setAuthData(initialAuthData);

  //   const onLogin = newAuthData => setAuthData(newAuthData);

  const authDataValue = useMemo({ ...authData, onLogin, onLogout }, [authData]);

  return <AuthDataContext.Provider value={authDataValue} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
