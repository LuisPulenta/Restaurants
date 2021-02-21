import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
     apiKey: "AIzaSyDYMSZePbJiSYEHqyYsYDq40x7I0-MI-WI",
     authDomain: "restaurants-1a606.firebaseapp.com",
     projectId: "restaurants-1a606",
     storageBucket: "restaurants-1a606.appspot.com",
     messagingSenderId: "760744514083",
     appId: "1:760744514083:web:f3924996e65b2aed061796"
   };
  
   export const firebaseApp = firebase.initializeApp(firebaseConfig)