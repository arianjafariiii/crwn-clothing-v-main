import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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


  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  export const db = getFirestore();

  export const addCollectionAndDocuments = async(objectsToAdd, collectionKey) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("done");
  }

  export const getCollectionsAndDouments = async() => {
    const collectionRef = collection(db, "Categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categories = querySnapshot.docs.map((snapshot => snapshot.data()));

    return categories;
  }




  export const createUserDocumentFromAuth = async(userAuth, moreInformation={}) => {
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
                createdAt,
                ...moreInformation
            });
        }catch(error){
            console.log("Have some errors");
        }   
    }
    return userSnapshot;
  }
export const createUserAuthWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUserAuth = async() =>  signOut(auth);

export const onAuthStateChangedListener = ( callback) => onAuthStateChanged(auth, callback);





export const getCurrentUser = () => {
  return new Promise ((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    )
  })
}
  