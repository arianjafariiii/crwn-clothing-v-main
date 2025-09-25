import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

    const popupSignIn = async() => {
        const {user} =  await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }
    return(
        <div>
            <p>This is signin page</p>
            <button onClick={popupSignIn}>click to sign in with popup</button>
        </div>
        
    );
}


export default SignIn