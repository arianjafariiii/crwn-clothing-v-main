import { useState } from "react";
import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-up.styles.scss';
import InputField from "../input-field/input-field.components";
import Button from "../button/Button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";


const defaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}



const SignUp = () => {
    const dispatch = useDispatch()
    const [formFields, setFormFields] = useState(defaultFields);
    const {displayName, email, password, confirmPassword} = formFields;
    
    const resetFields = () => {
        setFormFields(defaultFields);
    }



    const onSubmitHandler = async(event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("password and confirm password are not the same");
        }

        try{
            dispatch(signUpStart({email, password, displayName}))
            
            
        }catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email alraedy in use')
            }
            console.log("User creation encountered an error", error)
        }
        resetFields();
        
    } 
    const onChangeHandler = (event) => {
        const{name, value} =  event.target;
        setFormFields({...formFields, [name]: value});
        console.log(formFields);
    }
    return(
        <div className="sign-up-container">
            <h2>Dont have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmitHandler}>

                
                <InputField
                label="Display Name"
                type="text"
                name="displayName"
                value={displayName}
                onChange={onChangeHandler}
                required
                />
                
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
                
                <InputField
                label="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                required
                onChange={onChangeHandler}
                type="password"
                />

                <Button  buttonType="google" type="submit">SIGN UP</Button>

            </form>
        </div>
    );
}

export default SignUp;