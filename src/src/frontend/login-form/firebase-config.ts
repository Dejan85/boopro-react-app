import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVAQ-k7zz3MWSXdGXA1GeWg-MnYHG7aG4",
  authDomain: "authentication-1810e.firebaseapp.com",
  projectId: "authentication-1810e",
  storageBucket: "authentication-1810e.appspot.com",
  messagingSenderId: "774729423611",
  appId: "1:774729423611:web:4c3ea8e6ff42daaa702e5e",
  measurementId: "G-KXJB04VGN0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
