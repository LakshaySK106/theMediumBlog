// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from '@firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl7rWiz8rMw2KNxiDEF6LataWXGDbuR4w",
  authDomain: "themediumblog-ed3bb.firebaseapp.com",
  projectId: "themediumblog-ed3bb",
  storageBucket: "themediumblog-ed3bb.appspot.com",
  messagingSenderId: "307221955346",
  appId: "1:307221955346:web:13c32ddc3c389530b569cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)
export {auth, provider, db}