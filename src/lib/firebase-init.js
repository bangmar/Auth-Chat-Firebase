// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAlm38_TWUJ8H3hsBXVi1oxQqYV2AnwDV8",
	authDomain: "auth-b0a85.firebaseapp.com",
	projectId: "auth-b0a85",
	storageBucket: "auth-b0a85.appspot.com",
	messagingSenderId: "810150689281",
	appId: "1:810150689281:web:602236022734ecdd2cde00",
	measurementId: "G-JZMT1FFHMX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
