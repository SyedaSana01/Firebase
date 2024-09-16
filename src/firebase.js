// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDD3j8ZbkI7y3MK6i45jfL9k0gF8jJ7pHg",
  authDomain: "utube-app-a48ca.firebaseapp.com",
  projectId: "utube-app-a48ca",
  storageBucket: "utube-app-a48ca.appspot.com",
  messagingSenderId: "713821523031",
  appId: "1:713821523031:web:b438943495d22839116712",
  databaseURL: "https://utube-app-a48ca-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);

