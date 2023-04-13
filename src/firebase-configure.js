
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCh8u-DLMS14srrBZrqj1amDq45tG22YWY",
  authDomain: "newn-d2ee2.firebaseapp.com",
  projectId: "newn-d2ee2",
  storageBucket: "newn-d2ee2.appspot.com",
  messagingSenderId: "244799206766",
  appId: "1:244799206766:web:9cf0f36455db07605b7d7f"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);