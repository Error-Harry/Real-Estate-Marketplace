// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d1e37.firebaseapp.com",
  projectId: "mern-estate-d1e37",
  storageBucket: "mern-estate-d1e37.appspot.com",
  messagingSenderId: "383181309097",
  appId: "1:383181309097:web:81cd9ab1a9e8bfef1455b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);