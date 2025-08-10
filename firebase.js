// firebase.js

import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'

import { getAuth } from 'firebase/auth'  // ✅ Add this line



const firebaseConfig = {

  

  authDomain: "micromouse-900ec.firebaseapp.com",

  projectId: "micromouse-900ec",

  storageBucket: "micromouse-900ec.appspot.com",

  messagingSenderId: "234990092700",

  appId: "1:234990092700:web:cf92506f4f9af401870859",

  measurementId: "G-895PREVN74"

}



const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)  // ✅ Add this line



export { db, auth }
