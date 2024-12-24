// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY6O_qIIv7hgZuBBh2WPGWjpowVEVRafM",
  authDomain: "loginpage-1-53161.firebaseapp.com",
  projectId: "loginpage-1-53161",
  storageBucket: "loginpage-1-53161.appspot.com",
  messagingSenderId: "568246857832",
  appId: "1:568246857832:web:6263efc6c02492aff28bdd",
  measurementId: "G-0QJZMN18XT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
