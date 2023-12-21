// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxiKcecFtJraBAlmwqU1Rho7C4rx4GeGc",
  authDomain: "task-manager-57728.firebaseapp.com",
  projectId: "task-manager-57728",
  storageBucket: "task-manager-57728.appspot.com",
  messagingSenderId: "657126112037",
  appId: "1:657126112037:web:792aa6248a22dd854438cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;