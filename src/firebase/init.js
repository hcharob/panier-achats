import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Initialiser firebase
//Important d'initialiser firebase en premier
export const instanceFirebase = initializeApp(firebaseConfig);

//Initialiser Firebase Authentification
export const authFirebase = getAuth();

// Initialiser l'authentification fédérée Google
export const authGoogle = new GoogleAuthProvider();

// Initialiser firestore
export const bdFirestore = getFirestore();
