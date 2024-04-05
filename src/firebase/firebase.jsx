import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI2KcmLpQQxN0oLh7ZNEjnA00ADBcUvCc",
  authDomain: "recipebook-835c3.firebaseapp.com",
  projectId: "recipebook-835c3",
  storageBucket: "recipebook-835c3.appspot.com",
  messagingSenderId: "487262722992",
  appId: "1:487262722992:web:275556dc5dc347643b1475",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
