import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBet3knJ1D0r9pzUaxDMXOFNufyltGz17s",
    authDomain: "sneakcraft-7f338.firebaseapp.com",
    projectId: "sneakcraft-7f338",
    storageBucket: "sneakcraft-7f338.firebasestorage.app",
    messagingSenderId: "278441886408",
    appId: "1:278441886408:web:d839684018a107dfee1bfd",
    measurementId: "G-YE706DJLBY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
