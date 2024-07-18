import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
      authDomain: "reactchat-ea784.firebaseapp.com",
      projectId: "reactchat-ea784",
      storageBucket: "reactchat-ea784.appspot.com",
      messagingSenderId: "434906438120",
      appId: "1:434906438120:web:c2dbf14d6ea476cf64ec5d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()


