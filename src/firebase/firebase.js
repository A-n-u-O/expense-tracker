// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

// Your web app's Firebase configuration
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
// const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth }; // Export auth for use in other components