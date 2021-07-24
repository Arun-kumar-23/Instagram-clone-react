import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0Z5tqgj0P-L0EP-pcRPMABynKhhmVnFE",
    authDomain: "instagram-clone-react-2caf1.firebaseapp.com",
    projectId: "instagram-clone-react-2caf1",
    storageBucket: "instagram-clone-react-2caf1.appspot.com",
    messagingSenderId: "114755021532",
    appId: "1:114755021532:web:f09ebcae2ff005b4d4e219",
    measurementId: "G-M030H35J1Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};