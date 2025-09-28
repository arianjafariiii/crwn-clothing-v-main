import { useEffect } from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
import './authentication.styles.scss';
import { UserContext } from "../../context/user-context/user-context";
import {useContext} from "react";

const Authentication = () => {
    
    
    return(
        <div className="authentication-container">
            <SignIn/>
            <SignUp/>
        </div>
        
    );
}


export default Authentication;