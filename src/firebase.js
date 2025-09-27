// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbFqibPFpu90Qj-JjpeqUvta-lMwznJBM",
  authDomain: "joblytics-d66e6.firebaseapp.com",
  projectId: "joblytics-d66e6",
  storageBucket: "joblytics-d66e6.firebasestorage.app",
  messagingSenderId: "832143510821",
  appId: "1:832143510821:web:ff44004db30b4359749ecc",
  measurementId: "G-SW7ESYXWWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export auth and db so you can use them elsewhere
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;


