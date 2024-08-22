// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYoBD7B2H6YBA_mM_cgHiD4IytqSastrE",
  authDomain: "conecolual-sessions-react-11.firebaseapp.com",
  projectId: "conecolual-sessions-react-11",
  storageBucket: "conecolual-sessions-react-11.appspot.com",
  messagingSenderId: "1084646924177",
  appId: "1:1084646924177:web:749063cd6f4fab2731c430",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
