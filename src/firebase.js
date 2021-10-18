import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAjZ1B5Gn2dieILBxYg6rHKb6a_UwHKfjw",
    authDomain: "crud-458d5.firebaseapp.com",
    projectId: "crud-458d5",
    storageBucket: "crud-458d5.appspot.com",
    messagingSenderId: "285822608178",
    appId: "1:285822608178:web:649d648a3319f99966ed2b"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);