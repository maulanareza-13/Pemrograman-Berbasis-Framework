import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByDk6cfubseAGDr0ROIR7rYrwxZhJigPc",
    authDomain: "minggu11-2c84f.firebaseapp.com",
    databaseURL: "https://minggu11-2c84f-default-rtdb.firebaseio.com",
    projectId: "minggu11-2c84f",
    storageBucket: "minggu11-2c84f.appspot.com",
    messagingSenderId: "979498809098",
    appId: "1:979498809098:web:b31fdbe25ec681e9752cf3",
    measurementId: "G-42BL4W9L1W"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;