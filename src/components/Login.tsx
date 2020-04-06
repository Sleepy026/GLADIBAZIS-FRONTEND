import * as React from "react";
import firebase from "firebase";

interface Props {}

const Login: React.FC<Props> = () => {
  const handleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        console.log("Logout succesful");
      })
      .catch(function(error) {
        // An error happened.
      });
  };

  const checkToken = () => {
    const request = firebase.auth().currentUser;
    console.log(request);
  };

  return (
    <div>
      <button className="lo" type="button" onClick={checkToken}>
        TOKEN CHECK
      </button>
      <button type="button" onClick={handleLogin}>
        GOOGLE LOGIN
      </button>
      <button type="button" onClick={handleLogout}>
        GOOGLE LOGOUT
      </button>
      <div className="messageContainer">
        <p className="message"></p>
      </div>
    </div>
  );
};

export default Login;
