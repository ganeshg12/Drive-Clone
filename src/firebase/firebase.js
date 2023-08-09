// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAgIYqcIAiDXfx4x3D_QBCY-WyzGL1KKFk",
    authDomain: "drive-clone12.firebaseapp.com",
    projectId: "drive-clone12",
    storageBucket: "drive-clone12.appspot.com",
    messagingSenderId: "513887806249",
    appId: "1:513887806249:web:d4aa2171ca3fb60d834d38"
  };

// Initialize Firebase
!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();

export default db;

export { auth, storage, provider };
