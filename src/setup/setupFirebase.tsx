import firebase from "firebase/app";
import "firebase/storage";

// const firebase = require("firebase");
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

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
