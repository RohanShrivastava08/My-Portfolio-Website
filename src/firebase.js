// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBpEG9z5B4WBF3vfyxvxAsmES459u5I8SY",
    authDomain: "my-portfolio-b5824.firebaseapp.com",
    projectId: "my-portfolio-b5824",
    storageBucket: "my-portfolio-b5824.appspot.com",
    messagingSenderId: "836950778455",
    appId: "1:836950778455:web:b4a3c6f8bd062175357912",
    measurementId: "G-N5SDLETKHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
