// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-VWPJoqEh9f4HDEQmqWgUnCzIuxjdtlA",
  authDomain: "phalsus.firebaseapp.com",
  projectId: "phalsus",
  storageBucket: "phalsus.appspot.com",
  messagingSenderId: "43434260254",
  appId: "1:43434260254:web:2ca21fbfe95d15ccbbbb0f",
  measurementId: "G-TCQ04BJ5JN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const Db = getFirestore(app);

