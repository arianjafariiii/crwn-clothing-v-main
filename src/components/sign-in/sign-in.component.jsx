import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './sign-in.styles.scss';
import InputField from "../input-field/input-field.components";
import Button from "../button/Button.component";


const defaultFields = {
    email: '',
    password: '',

}



const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFields);
    const { email, password} = formFields;
    
    const popupSignIn = async() => {
        const {user} =  await signInWithGooglePopup();
        await createUserDocumentFromAuth(user); 
    };

    const resetFields = () => {
        setFormFields(defaultFields);
    }



    const onSubmitHandler = async(event) => {
        event.preventDefault();

        try{
            const {user} = await signInUserWithEmailAndPassword(email, password);
            resetFields();
        }catch(error) {
            switch(error.code){
                case 'auth/invalid-credential':
                    alert("password does not match email.");
                    break;
                
                default:
                    console.log(error);
                
            }
        }
        
        
    } 
    const onChangeHandler = (event) => {
        const{name, value} =  event.target;
        setFormFields({...formFields, [name]: value});
        console.log(formFields);
    }
    return(
        <div className="sign-up-container">
            <h2> already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmitHandler}>
                
                <InputField
                label="Email"
                type="email"
                name="email"
                value={email}
                required
                onChange={onChangeHandler}
                />
                
                <InputField
                label="Password"
                name="password"
                value={password}
                required
                onChange={onChangeHandler}
                type="password"
                />
                <div className="buttons-container">
                    <Button   type="submit">SIGN IN</Button>
                    <Button type="button" buttonType={"google"} onClick={popupSignIn}>Google Sign In</Button>
                </div>

            </form>
        </div>
    );
}

export default SignIn;