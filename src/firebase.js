import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBh7EZsy3XWFn8f5PMM53Jzf7VgKUHKcOY",
  authDomain: "aesseromani-login.firebaseapp.com",
  projectId: "aesseromani-login",
  storageBucket: "aesseromani-login.appspot.com",
  messagingSenderId: "25135665039",
  appId: "1:25135665039:web:ccd8cb5c2dd417dce485fa",
  measurementId: "G-XZ8SL0MP2F",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
