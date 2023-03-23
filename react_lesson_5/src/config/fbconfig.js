import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCydY_K-DQ1wDyHZK9lSZENoEJhmtFif4k",
    authDomain: "gnanaplanforyou.firebaseapp.com",
    databaseURL: "https://gnanaplanforyou.firebaseio.com",
    projectId: "gnanaplanforyou",
    storageBucket: "gnanaplanforyou.appspot.com",
    messagingSenderId: "1082272476565",
    appId: "1:1082272476565:web:8da664d6c850e5ea441a9c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase ;