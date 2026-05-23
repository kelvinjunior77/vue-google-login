// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKky4KbANpv2RGjbXZTNuDUYfOAOHFeGg",
  authDomain: "vue-login-57442.firebaseapp.com",
  projectId: "vue-login-57442",
  storageBucket: "vue-login-57442.firebasestorage.app",
  messagingSenderId: "989860622179",
  appId: "1:989860622179:web:872ea1e2cd76d4c7baad56",
  measurementId: "G-4DFCLEM8RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };