import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAtoWhfsfyvDYiH-0Dhc-MZQxqQoi2SHg",
  authDomain: "linkedin-balu.firebaseapp.com",
  projectId: "linkedin-balu",
  storageBucket: "linkedin-balu.appspot.com",
  messagingSenderId: "473678395383",
  appId: "1:473678395383:web:0f47d478bd5a842e16e0f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const perf = getPerformance(app);
const analytics = getAnalytics(app);
// const dbref = firebase.firestore();
// export const postsRef = dbref.child("posts");
// //const auth = firebase.auth();

// export { db };
const db = getFirestore(app);
export { db, auth };
