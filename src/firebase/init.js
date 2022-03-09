import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"; 

// Initialiser firebase
export const instanceFirebase = initializeApp(firebaseConfig);

// Initialiser firestore
export const bdFirestore = getFirestore();
