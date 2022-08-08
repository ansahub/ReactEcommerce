// This file is just for using FIREBASE

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAbijo_VdccR-ZMfSwafftXsgKZ7vAQDI",
  authDomain: "react-ecommerce-tshirt-shop.firebaseapp.com",
  projectId: "react-ecommerce-tshirt-shop",
  storageBucket: "react-ecommerce-tshirt-shop.appspot.com",
  messagingSenderId: "748048111849",
  appId: "1:748048111849:web:9a322f9d197f7f4c34b878"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef); 

  //if user data DOESN'T exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;

  //if user data exists



  //return userDocref

};