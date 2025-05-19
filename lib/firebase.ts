import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeVyQCU_koMu4QalkbbGT-fpLQHZWKPhU",
  authDomain: "axonsite-f4967.firebaseapp.com",
  projectId: "axonsite-f4967",
  storageBucket: "axonsite-f4967.firebasestorage.app",
  messagingSenderId: "99932691250",
  appId: "1:99932691250:web:c3515b6162518c79d1152b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
