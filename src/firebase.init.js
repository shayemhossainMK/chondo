import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9J4nnfV0kwlKR2umP-ZCvHtUCkITy-qY",
  authDomain: "chondo-blogs.firebaseapp.com",
  projectId: "chondo-blogs",
  storageBucket: "chondo-blogs.appspot.com",
  messagingSenderId: "878493094638",
  appId: "1:878493094638:web:3bb5ca877a6ffd3c06d9ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
