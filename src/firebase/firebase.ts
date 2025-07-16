// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNF5WeuTLpuPwoepb-xO4HXIB9WAtoKVE",
  authDomain: "craftbysunil.firebaseapp.com",
  projectId: "craftbysunil",
  storageBucket: "craftbysunil.firebasestorage.app",
  messagingSenderId: "957222321396",
  appId: "1:957222321396:web:09128ec18f867df28ab2a1",
  measurementId: "G-Q1XW5KXFH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
