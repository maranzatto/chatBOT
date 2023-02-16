import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxiAuCXbeLVCr1PtddLDSYrY8EwR_tFLo",
  authDomain: "chatbot-30f7b.firebaseapp.com",
  projectId: "chatbot-30f7b",
  storageBucket: "chatbot-30f7b.appspot.com",
  messagingSenderId: "393613972323",
  appId: "1:393613972323:web:8a27b15f349af1a9547956",
  measurementId: "G-QZT0MMS5WS"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);
