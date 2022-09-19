import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyArWtQB-GetGV-AsCSRuW__eL7n1PJ6ZkY",
  authDomain: "crown-clothing-db-990ae.firebaseapp.com",
  projectId: "crown-clothing-db-990ae",
  storageBucket: "crown-clothing-db-990ae.appspot.com",
  messagingSenderId: "663585432289",
  appId: "1:663585432289:web:a0642768f4d98369a5cda0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)