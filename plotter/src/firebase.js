import firebase from"firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAD_JyNyeix27sZeYMUSQXqIrQdxwUB_iM",
    authDomain: "plotter1-b77b4.firebaseapp.com",
    databaseURL: "https://plotter1-b77b4.firebaseio.com",
    projectId: "plotter1-b77b4",
    storageBucket: "plotter1-b77b4.appspot.com",
    messagingSenderId: "170000126306",
    appId: "1:170000126306:web:1c4e07a18400f78f381c3b",
    measurementId: "G-44T7WKE6Z4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  export default db;