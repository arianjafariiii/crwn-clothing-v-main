import "./checkout-item.component.styles.scss";
import {useContext} from "react";
import { CartContext } from "../../context/cart-context/cart-context.component";



const CheckoutItem = ({cartItem}) => {
    const{name, price, imageUrl, quantity} = cartItem;
    const {addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    
    const inCreaseItemCount = () => addItemToCart(cartItem);
    const decreaseItemCount = () => removeItemFromCart(cartItem);
    const clearHandler = () => clearItemFromCart(cartItem);
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