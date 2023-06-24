// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyQC9CcIM2Mb2UDbX8k16j3mWqYav_7dE",
  authDomain: "house-marketplace-app-dea75.firebaseapp.com",
  projectId: "house-marketplace-app-dea75",
  storageBucket: "house-marketplace-app-dea75.appspot.com",
  messagingSenderId: "991821819646",
  appId: "1:991821819646:web:24d966955b199f66e13faf",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
