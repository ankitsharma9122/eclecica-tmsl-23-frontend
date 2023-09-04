
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVpQTWjgiC2hWfS3yYa10viwiMGNP63hs",
  authDomain: "eclectica-tmsl-auth.firebaseapp.com",
  projectId: "eclectica-tmsl-auth",
  storageBucket: "eclectica-tmsl-auth.appspot.com",
  messagingSenderId: "522336676889",
  appId: "1:522336676889:web:556ecc5a38076550934e88",
  measurementId: "G-HP0EQ7DW15"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};