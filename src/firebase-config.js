import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "fir-tuto-b70e0.firebaseapp.com",
    projectId: "fir-tuto-b70e0",
    storageBucket: "fir-tuto-b70e0.appspot.com",
    messagingSenderId: "680778195094",
    appId: "1:680778195094:web:1d27bd84341f258c32e2b7"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)