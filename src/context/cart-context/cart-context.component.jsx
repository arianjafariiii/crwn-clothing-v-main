import { createContext, useEffect, useState } from "react";

const addNewItemToCartItems = (newItem, cartItems) => {
    const itemExist = cartItems.find(item => item.id === newItem.id);
    

    if (itemExist) {
        return cartItems.map((cartItem) => 
            cartItem.id === newItem.id ? 
            {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
        );
    }

    return [...cartItems ,{...newItem, quantity: 1} ];


}

export const CartContext = createContext({
    isCartOpen: {},
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    itemCount: 0,
    
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    useEffect(() => {
        const newItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
        setItemCount(newItemCount);
    }, [cartItems])
    
    const addItemToCart = (item) => {
        setCartItems(addNewItemToCartItems(item, cartItems));
        console.log(cartItems);
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, itemCount, setItemCount};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



