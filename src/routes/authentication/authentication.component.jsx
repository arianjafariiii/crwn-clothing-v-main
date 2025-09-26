import { useEffect } from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";


import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    auth
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";

const Authentication = () => {

    
    
    return(
        <div>
            <SignIn/>
            <SignUp/>
        </div>
        
    );
}


export default Authentication;