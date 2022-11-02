// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJP-_jpLiAOgIUvJ1r4C_qTJipDQZnHlg",
  authDomain: "uploadingimage-3b1aa.firebaseapp.com",
  projectId: "uploadingimage-3b1aa",
  storageBucket: "uploadingimage-3b1aa.appspot.com",
  messagingSenderId: "587534018154",
  appId: "1:587534018154:web:8b0ee792f7f44f86370c13",
  measurementId: "G-E9Z61C0DDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)