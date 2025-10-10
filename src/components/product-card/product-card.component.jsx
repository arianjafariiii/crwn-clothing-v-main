import "./product-card.styles.scss";
import Button from "../button/Button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";


const ProductCard = ({props}) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const {name, imageUrl, price} = props; 

    const addNewItem = () => 
        dispatch(addItemToCart(cartItems, props));
    
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