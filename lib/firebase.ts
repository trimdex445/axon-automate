import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP3Orpc4hShU7vt1nuKG4edOKExMeEecI",
  authDomain: "axonn8n.firebaseapp.com",
  projectId: "axonn8n",
  storageBucket: "axonn8n.firebasestorage.app",
  messagingSenderId: "787605047308",
  appId: "1:787605047308:web:bf598d495146a61543c629",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
