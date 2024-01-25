import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkzdA3GDXWfGeKC0Xqsl8SA9RhPPuS5VE",
  authDomain: "smart-crops.firebaseapp.com",
  projectId: "smart-crops",
  storageBucket: "smart-crops.appspot.com",
  messagingSenderId: "63375938055",
  appId: "1:63375938055:web:a82476c6d3708365ebd0a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)