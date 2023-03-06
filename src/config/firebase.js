// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQaVflGu0PE7dM-C30YqDICy80vQTwQHI",
  authDomain: "cimena-edf0c.firebaseapp.com",
  projectId: "cimena-edf0c",
  storageBucket: "cimena-edf0c.appspot.com",
  messagingSenderId: "232280865870",
  appId: "1:232280865870:web:944ee170c0f738f002171f",
  measurementId: "G-SFNG7P432X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


//Autentiçação
export const auth = getAuth(app);

//Storage
export const storage = getStorage(app);
