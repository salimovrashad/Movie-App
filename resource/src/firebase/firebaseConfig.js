import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAuajYXxFITeOMVmGa1ZjmV0kwh_uXY86I",
    authDomain: "movies-da2b8.firebaseapp.com",
    databaseURL: "https://movies-da2b8-default-rtdb.firebaseio.com",
    projectId: "movies-da2b8",
    storageBucket: "movies-da2b8.appspot.com",
    messagingSenderId: "24429655786",
    appId: "1:24429655786:web:211cf70e89b0ec91120993"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }