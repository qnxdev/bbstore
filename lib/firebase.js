import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

export function firebaseInit() {
  try {
    var config = {
      apiKey: "AIzaSyDqn_fD4N_Vp5FSjEkdL7OWeNinl_4CS28",
      authDomain: "blackberry-store.firebaseapp.com",
      projectId: "blackberry-store",
      storageBucket: "blackberry-store.appspot.com",
      messagingSenderId: "189462174080",
      appId: "1:189462174080:web:a1146b869719e164d04965",
      measurementId: "G-HHWTV1GKCX"
    };

firebase.initializeApp(config);
} catch (err) {
  // we skip the "already exists" message which is    
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
return firebase;
}
