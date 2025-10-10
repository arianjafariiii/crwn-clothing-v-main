import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import{ReactComponent as CrwnLogo} from "../../assets/007 crown.svg"
import './navbar.styles.scss';
import { signOutUserAuth } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";


const Navbar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    
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