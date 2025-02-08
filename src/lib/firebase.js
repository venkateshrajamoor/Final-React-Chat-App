import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: "reactmain-aadd9.firebaseapp.com",
  // projectId: "reactmain-aadd9",
  // storageBucket: "reactmain-aadd9.appspot.com",
  // messagingSenderId: "898143946632",
  // appId: "1:898143946632:web:c5f2a4d32dc4bc8cccdc3d",
  // apiKey: "AIzaSyCp7KsVCWcVQ7BKyUmK7Rogu-NBa9W9ywk",
    authDomain: "reactmainnew.firebaseapp.com",
    projectId: "reactmainnew",
    storageBucket: "reactmainnew.appspot.com",
    messagingSenderId: "988474410008",
    appId: "1:988474410008:web:00001f17c1cb2183eaef6d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()


