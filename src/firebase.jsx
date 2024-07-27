// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBds4WQ4zsgOfy30c9ogasuAjeiuxD38PA",
  authDomain: "wanderlog-ab438.firebaseapp.com",
  databaseURL:
    "https://wanderlog-ab438-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wanderlog-ab438",
  storageBucket: "wanderlog-ab438.appspot.com",
  messagingSenderId: "618039222652",
  appId: "1:618039222652:web:d395998b8bc7ac5a44c4f9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
