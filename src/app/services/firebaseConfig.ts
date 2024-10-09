import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dotenv from 'dotenv';
// import "firebase/compat/firestore"
import firebase from "firebase/compat/app";

import { getFirestore, Firestore } from "firebase/firestore";




dotenv.config();

const { APIKEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID } = process.env

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
};

let app = initializeApp(firebaseConfig);


const db = getFirestore();

export default db

// Initialize Firebase
// const analytics = getAnalytics(app);
