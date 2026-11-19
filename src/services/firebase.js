import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQU5TW4i1oUFiAJ1mHW17iiH6xd2yRECo",
  authDomain: "mosaic-70801.firebaseapp.com",
  projectId: "mosaic-70801",
  storageBucket: "mosaic-70801.firebasestorage.app",
  messagingSenderId: "1029333701519",
  appId: "1:1029333701519:web:0e4cb171b7dbcaaceaf1fa"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);