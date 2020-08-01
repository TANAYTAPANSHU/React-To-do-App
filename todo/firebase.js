const firebaseConfig = {
    apiKey: "AIzaSyDBrhtQyvTZkU-nVGukMbp8787eRPZI6IQ",
    authDomain: "react-todo-app-1778d.firebaseapp.com",
    databaseURL: "https://react-todo-app-1778d.firebaseio.com",
    projectId: "react-todo-app-1778d",
    storageBucket: "react-todo-app-1778d.appspot.com",
    messagingSenderId: "185700437754",
    appId: "1:185700437754:web:5d2ce17c073040c76f4343",
    measurementId: "G-SXQC93NZ54"
};

import firebase, { firestore } from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDBrhtQyvTZkU-nVGukMbp8787eRPZI6IQ",
    authDomain: "react-todo-app-1778d.firebaseapp.com",
    databaseURL: "https://react-todo-app-1778d.firebaseio.com",
    projectId: "react-todo-app-1778d",
    storageBucket: "react-todo-app-1778d.appspot.com",
    messagingSenderId: "185700437754",
    appId: "1:185700437754:web:5d2ce17c073040c76f4343",
    measurementId: "G-SXQC93NZ54"
})

const db = firebaseApp.firestore();

export db;