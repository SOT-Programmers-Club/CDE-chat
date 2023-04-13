
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  copy the code from firebase.com
  //apiKey: "",
  //authDomain: "",
  //projectId: "",
  ///storageBucket: "",
  //messagingSenderId: "",
  //appId: ""
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
