// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKPUrtu6Fjo4f7ah3ZGUJi25ZUvz0QqlU",
  authDomain: "crowd-fun.firebaseapp.com",
  projectId: "crowd-fun",
  storageBucket: "crowd-fun.appspot.com",
  messagingSenderId: "434541448921",
  appId: "1:434541448921:web:bb5b4861e2e83a242738c8",
  measurementId: "G-V3M3TTPQR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);