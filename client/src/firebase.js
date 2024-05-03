// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQPywFr5c5JNbA0tLoFKVT8yFx_Lz-_Go",
  authDomain: "video-b1df8.firebaseapp.com",
  projectId: "video-b1df8",
  storageBucket: "video-b1df8.appspot.com",
  messagingSenderId: "1078554803764",
  appId: "1:1078554803764:web:1f6be62b0397c2690dd461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;