import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBGMeZYks5e1DdV00M8gVTugpRx_qZ4U6w",
    authDomain: "movies-c0b19.firebaseapp.com",
    databaseURL: "https://movies-c0b19-default-rtdb.firebaseio.com",
    projectId: "movies-c0b19",
    storageBucket: "movies-c0b19.appspot.com",
    messagingSenderId: "296426936750",
    appId: "1:296426936750:web:6bd25d761460989c52903f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }