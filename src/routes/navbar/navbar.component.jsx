import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import{ReactComponent as CrwnLogo} from "../../assets/007 crown.svg"
import './navbar.styles.scss';
import { UserContext } from "../../context/user-context/user-context";
import { useContext } from "react";
import { signOutUserAuth } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart-context/cart-context.component";


const Navbar = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    
    const handleSignout = async() => {
        await signOutUserAuth();

    }
    return(
        <Fragment>
            <div className="navigation">
                
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop" >SHOP</Link>
                    {currentUser ?  <span onClick={handleSignout}>Sign Out</span> : <Link className="nav-link" to="/auth" >SIGN IN</Link>}
                    <CartIcon/>
                </div>
               {isCartOpen &&  <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navbar;