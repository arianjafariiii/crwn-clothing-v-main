import Button from "../button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss';
import { CartContext } from "../../context/cart-context/cart-context.component";
import { useContext } from "react";
const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => {
                    return <CartItem key={item.id} item = {item} />
                })}
            </div> 
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
}


export default CartDropdown;