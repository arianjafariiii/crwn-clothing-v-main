import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyDghsB8NIx1nbyJjlvcqNzWz7MkW7s-Lj4",
  
    authDomain: "crwn-clothing-v2-b1f65.firebaseapp.com",
  
    projectId: "crwn-clothing-v2-b1f65",
  
    storageBucket: "crwn-clothing-v2-b1f65.firebasestorage.app",
  
    messagingSenderId: "329100665760",
  
    appId: "1:329100665760:web:04dbf4d0be559b7470fac5",
  
    measurementId: "G-3JM80TPJQZ"
  
  };
  
  
  // Initialize Firebase
  
  const fireBaseApp = initializeApp(firebaseConfig);


  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log("Have some errors");
        }


        return userDocRef;
    }
  }


  