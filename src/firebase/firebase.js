// Initialize Firebase
import firebase from 'firebase/app';

var config = {
  apiKey: "AIzaSyBq93vStjZJ6Y1AvJeEqBffIzotzWhbVZ4",
  authDomain: "red-social-d8e2c.firebaseapp.com",
  databaseURL: "https://red-social-d8e2c.firebaseio.com",
  projectId: "red-social-d8e2c",
  storageBucket: "red-social-d8e2c.appspot.com",
  messagingSenderId: "709425048422"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const database= firebase.database();

export {
  auth,
  database,
}
