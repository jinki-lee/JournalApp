// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3n1spQdSTvkCTbahJBSfrcGynYLHW-o8",
  authDomain: "journal-app-53394.firebaseapp.com",
  projectId: "journal-app-53394",
  storageBucket: "journal-app-53394.appspot.com",
  messagingSenderId: "577789180693",
  appId: "1:577789180693:web:496873423bbac17409471c",
  measurementId: "G-5993JB0KCH"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };