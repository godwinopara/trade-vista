// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAhtrf2D-UNtxfBhGmlNUrdbZXy-PBXy28",
	authDomain: "tradevista-17bab.firebaseapp.com",
	projectId: "tradevista-17bab",
	storageBucket: "tradevista-17bab.appspot.com",
	messagingSenderId: "278940050290",
	appId: "1:278940050290:web:c7184e81e082a828ca33eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
