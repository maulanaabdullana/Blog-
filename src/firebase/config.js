import firebase from "firebase/app";
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBdRGQAgjxCif5onh4caUzBC0rYUu9Wyi0",
  authDomain: "vueblog-51dd3.firebaseapp.com",
  projectId: "vueblog-51dd3",
  storageBucket: "vueblog-51dd3.appspot.com",
  messagingSenderId: "299523069455",
  appId: "1:299523069455:web:5d4d3eab874ecc88c1357a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export{
  db
}