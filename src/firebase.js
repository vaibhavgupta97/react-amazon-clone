import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATUcouKrh6Fv4UQPRDKMfzuNIFdLuWtbM",
    authDomain: "clone-fa0ee.firebaseapp.com",
    databaseURL: "https://clone-fa0ee.firebaseio.com",
    projectId: "clone-fa0ee",
    storageBucket: "clone-fa0ee.appspot.com",
    messagingSenderId: "1032146903027",
    appId: "1:1032146903027:web:69cb65e1f2a87c6fcb7c86",
    measurementId: "G-9LYQ9NWTV0"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};