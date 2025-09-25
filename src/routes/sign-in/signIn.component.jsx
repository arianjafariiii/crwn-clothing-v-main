import { useEffect } from "react";
import SignUp from "../../components/sign-up/sign-up.component";


import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    auth
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
    
    useEffect(() => {
        const checkRedirectResult = async () => {
          try {
            const response = await getRedirectResult(auth);
            if (response) {
              await createUserDocumentFromAuth(response.user);
            }
          } catch (err) {
            console.error("Redirect sign-in error:", err);
          }
        };
      
        checkRedirectResult();
      }, []);

    const popupSignIn = async() => {
        const {user} =  await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    };
    
    return(
        <div>
            <p>This is signin page</p>
            <button onClick={popupSignIn}>click to sign in with popup</button>
            <button onClick={signInWithGoogleRedirect}>click to sign in with redirect</button>
            <SignUp/>
        </div>
        
    );
}


export default SignIn