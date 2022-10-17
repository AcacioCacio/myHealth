// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdeapirGbhUCwJCRPsctQTtlpBYLkcLXU",
  authDomain: "myhealth-7b96b.firebaseapp.com",
  projectId: "myhealth-7b96b",
  storageBucket: "myhealth-7b96b.appspot.com",
  messagingSenderId: "572562575518",
  appId: "1:572562575518:web:54a9c9317cb334ae42ab8f",
  measurementId: "G-V1CK27XWZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth}