import {ReactComponent as ShoppingIcon} from '../../assets/004 shopping-bag.svg';
import './cart-icon.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context/cart-context.component';


const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, itemCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div children class="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}


export default CartIcon;