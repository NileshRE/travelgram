// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKe3vjp8Royd2R9OTyHzGQ3rvFlCU3Oic",
  authDomain: "travelgram-3b665.firebaseapp.com",
  projectId: "travelgram-3b665",
  storageBucket: "travelgram-3b665.appspot.com",
  messagingSenderId: "361438106218",
  appId: "1:361438106218:web:88060e0136db478985b013",
  measurementId: "G-SF3W5S48HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);