// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaPkIRCTVjs8wZ6MZHYzeAxRiNhzURFCg",
  authDomain: "app-ticket-d5940.firebaseapp.com",
  projectId: "app-ticket-d5940",
  storageBucket: "app-ticket-d5940.appspot.com",
  messagingSenderId: "233590040373",
  appId: "1:233590040373:web:5af9ea759d08f378a60e7c"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
