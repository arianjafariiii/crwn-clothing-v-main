import "./checkout-item.component.styles.scss";

import {addItemToCart, removeItemFromCart, clearItemFromCart} from "../../store/cart/cart.action.js"
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { useDispatch } from "react-redux";


const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const{name, price, imageUrl, quantity} = cartItem;
    const cartItems = useSelector(selectCartItems);
    
    const inCreaseItemCount = () => dispatch(addItemToCart(cartItems, cartItem));
    const decreaseItemCount = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decreaseItemCount} >
                    &#10094;
                </div>
                <span className="value">
                    {quantity}
                </span>
                <div className="arrow" onClick={inCreaseItemCount} >
                    &#10095;
                </div>
                
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={clearHandler}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem;