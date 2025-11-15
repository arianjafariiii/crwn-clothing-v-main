import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import{ReactComponent as CrwnLogo} from "../../assets/007 crown.svg"
import './navbar.styles.scss';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";


const Navbar = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    
    const handleSignout = () => dispatch(signOutStart());
    
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