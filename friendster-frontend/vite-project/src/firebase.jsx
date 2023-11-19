// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Tf_Rh5DXlNrUp9PKrMQaVF6p2pblE3E",
  authDomain: "friendster-94309.firebaseapp.com",
  projectId: "friendster-94309",
  storageBucket: "friendster-94309.appspot.com",
  messagingSenderId: "1616557505",
  appId: "1:1616557505:web:697ac33b452503e7216b40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


// Initialize Firebase Realtime Database and get a reference to the service
export const database = getDatabase(app);
