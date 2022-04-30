// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxAUDzk1BpCI_7cj-eAQ2cYrJ9JfGvhew",
  authDomain: "book-house-f63f7.firebaseapp.com",
  projectId: "book-house-f63f7",
  storageBucket: "book-house-f63f7.appspot.com",
  messagingSenderId: "94786318393",
  appId: "1:94786318393:web:f08ab8acbba29f46dc5de8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
