import './cart-item.styles.scss';

const CartItem = ({item}) => {
    const {name, quantity, imageUrl} = item;
    return (
        <div className="cart-item-container">
            <img src= {imageUrl} alt={`${name}`} />
            <div className="item-details">
                <h2 className="name">{name}</h2>
                <span class="price">
                    {quantity} x ${name}    
                </span>    
            </div>
            
        </div>
    );
}


export default CartItem;