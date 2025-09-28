import "./product-card.styles.scss";
import Button from "../button/Button.component";
import { UserContext } from "../../context/user-context/user-context";
import { CartContext } from "../../context/cart-context/cart-context.component";
import { useContext } from "react";

const ProductCard = ({props}) => {
    const {cartItems, addItemToCart, itemCount, setItemCount} = useContext(CartContext); 
    const {name, imageUrl, id, price} = props;
    

    const addNewItem = () => {
        addItemToCart(props);
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={addNewItem} buttonType="inverted" >Add to cards</Button>
        </div>
    );
}

export default ProductCard;