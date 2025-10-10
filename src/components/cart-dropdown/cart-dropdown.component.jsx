import Button from "../button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss';

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import { selectCartItems } from "../../store/cart/cart.selector";


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    
    
    const navigate = useNavigate();
    const toCheckoutHandler = () => {
        navigate("/checkout");
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (cartItems.map((item) => {
                    return <CartItem key={item.id} item = {item} />
                })): (<span>Your cart is empty.</span>)}
                {}
            </div> 
            <Button onClick={toCheckoutHandler} >GO TO CHECKOUT</Button>
        </div>
    );
}


export default CartDropdown;