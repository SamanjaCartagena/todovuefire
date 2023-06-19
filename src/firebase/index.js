// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAfET5VPLVOzO9ipyQ9jwJjkwwweGEOLg0",
  authDomain: "badass-c8fef.firebaseapp.com",
  projectId: "badass-c8fef",
  storageBucket: "badass-c8fef.appspot.com",
  messagingSenderId: "767188706655",
  appId: "1:767188706655:web:46b0d46f2a870175efc2ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db 
}