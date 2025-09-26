import { useEffect } from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
import './authentication.styles.scss';


import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    auth
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";

const Authentication = () => {

    
    
    return(
        <div className="authentication-container">
            <SignIn/>
            <SignUp/>
        </div>
        
    );
}


export default Authentication;