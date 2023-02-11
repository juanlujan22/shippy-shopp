import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHdEr8DRIVNTDGMqN6slef9XBezZpMrZg",
  authDomain: "tienda-shippy-shopp.firebaseapp.com",
  projectId: "tienda-shippy-shopp",
  storageBucket: "tienda-shippy-shopp.appspot.com",
  messagingSenderId: "338901972338",
  appId: "1:338901972338:web:124a86eb5a2f5aa886d9eb"
};

// Initialize Firebase, conexion a la plataforma
const app = initializeApp(firebaseConfig);
// conecta a la base de datos
export const db = getFirestore(app);