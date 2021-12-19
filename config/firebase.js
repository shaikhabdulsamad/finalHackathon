// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import { getDatabase,  ref, set } from "firebase/database"
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDnG2NqZXSlfjhJPbZM6k09zwb2Ev5c1E8",
  authDomain: "fir-auth-with-expo.firebaseapp.com",
  projectId: "fir-auth-with-expo",
  storageBucket: "fir-auth-with-expo.appspot.com",
  messagingSenderId: "492753156132",
  appId: "1:492753156132:web:49ade16065de4aa71f80b1",
  measurementId: "G-RVE7WY90XD"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app)
export {
auth,
db,
firestore,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut,
ref, 
set,
collection,
 addDoc,
 doc,
  setDoc
}