// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzP2p9W00rIX6mRFLLNKBa_YIRXGuxOlA",
  authDomain: "teacher-aid-d5500.firebaseapp.com",
  projectId: "teacher-aid-d5500",
  storageBucket: "teacher-aid-d5500.appspot.com",
  messagingSenderId: "352975508074",
  appId: "1:352975508074:web:aa2ae3cfe43edde9f2b013",
  measurementId: "G-3CE1LCMC1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

if (process.env.ENVIRONMENT === "DEVELOPMENT") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
} 


export {app, db}