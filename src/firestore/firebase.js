import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDWLjQ6SCgk9HNvkV-W9bYOECW1fgLIB50",
  authDomain: "tienda-mode.firebaseapp.com",
  projectId: "tienda-mode",
  storageBucket: "tienda-mode.appspot.com",
  messagingSenderId: "529726340750",
  appId: "1:529726340750:web:b6cc284230ccaf8c4953df"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);