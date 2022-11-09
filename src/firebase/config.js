
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, onValue } from 'firebase/database'
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmIw6cuIAGBlxPys8rHHd1LIyvu5CxgDQ",
    authDomain: "diamond-store-api.firebaseapp.com",
    projectId: "diamond-store-api",
    storageBucket: "diamond-store-api.appspot.com",
    messagingSenderId: "493318798407",
    appId: "1:493318798407:web:4437aefc41b13c0cb3c562"
};

const app = initializeApp(firebaseConfig)

const db = getDatabase(app)

const auth = getAuth(app);

const storage = getStorage()

const db_ = getFirestore()

export { db, ref, onValue, push, auth, storage, db_ }