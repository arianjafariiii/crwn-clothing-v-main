import {ReactComponent as ShoppingIcon} from '../../assets/004 shopping-bag.svg';
import './cart-icon.styles.scss'
import { useDispatch } from 'react-redux';

import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartCount } from '../../store/cart/cart.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';


const CartIcon = () => {
    const dispatch  = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () =>{
        console.log(isCartOpen);
        return dispatch(setIsCartOpen(!isCartOpen));
    } 
    return (
        <div children className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}


export default CartIcon;