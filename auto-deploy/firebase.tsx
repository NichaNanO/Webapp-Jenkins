// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCersT6jZQAVycom6t-qM74t-i06M_bWXQ",
  authDomain: "webapp-31a99.firebaseapp.com",
  projectId: "webapp-31a99",
  storageBucket: "webapp-31a99.firebasestorage.app",
  messagingSenderId: "770164362954",
  appId: "1:770164362954:web:76da7f6519b4aba6752e33",
  measurementId: "G-Z2GR3K9KRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);