import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-XeiNIt9bA1kq1cdSQbV46IeAJ_FjGYM",
  authDomain: "espfirestore-499a1.firebaseapp.com",
  projectId: "espfirestore-499a1",
  storageBucket: "espfirestore-499a1.appspot.com",
  messagingSenderId: "610310414011",
  appId: "1:610310414011:web:5c3d058bf2ba461f31d39e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)