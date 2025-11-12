import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver,

} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    QueryDocumentSnapshot
} from "firebase/firestore"
import { Category } from "../../store/categories/categories.types";

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


  export type ObjectToAdd = {
    title: string;
  }
  export const addCollectionAndDocuments = async<T extends ObjectToAdd>
  (objectsToAdd : T[], collectionKey: string): Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("done");
  }


  

  export const getCollectionsAndDouments = async(): Promise<Category[]> => {
    const collectionRef = collection(db, "Categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categories = querySnapshot.docs.map((snapshot => snapshot.data()));

    return categories as Category[];
  }




  export type MoreInformation  = {
    displayName?: string;
  }

  export type UserData = {
    createdAt: Date;
    displayName: string;
    email: string;
  }


  export const createUserDocumentFromAuth = async(
    userAuth: User,
     moreInformation= {} as MoreInformation
    ): Promise<void | QueryDocumentSnapshot<UserData>> => {
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
    return userSnapshot as QueryDocumentSnapshot<UserData>;
  }
export const createUserAuthWithEmailAndPassword = async(email: string, password: string) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async(email: string, password: string ) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUserAuth = async() =>  signOut(auth);

export const onAuthStateChangedListener = ( callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);





export const getCurrentUser = (): Promise<User|null> => {
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
  