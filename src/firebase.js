import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCjFCuGf8MkBGOTcqTwBiaEGQU5UYWBE5A",
    authDomain: "unofficial-a6378.firebaseapp.com",
    projectId: "unofficial-a6378",
    storageBucket: "unofficial-a6378.appspot.com",
    messagingSenderId: "435282414076",
    appId: "1:435282414076:web:44ef1f0a0a21bf28c34a79",
    measurementId: "G-RRK0JGPXMY"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { auth, storage };
export default db;