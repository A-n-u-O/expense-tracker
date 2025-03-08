import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "expense-tracker-25935.firebaseapp.com",
  projectId: "expense-tracker-25935",
  storageBucket: "expense-tracker-25935.appspot.com",
  messagingSenderId: "829177484163",
  appId: "1:829177484163:web:f16eb9044458da55169cb6",
  measurementId: "G-8PRQ9N1MKK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore (optional)

export { auth, db }; // Export auth and db for use in other components