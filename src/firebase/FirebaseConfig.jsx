// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA5bJKjfl4LXEkmuExS3KkJMmUMYvQ7_CY",
  authDomain: "ecom-4e784.firebaseapp.com",
  projectId: "ecom-4e784",
  storageBucket: "ecom-4e784.appspot.com",
  messagingSenderId: "108063897946",
  appId: "1:108063897946:web:ca187ea694e2f2ac5f1b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }