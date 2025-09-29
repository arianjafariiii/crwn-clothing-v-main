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

const decreaseItemCountFromCart = (cartItems, removeItem) => {
    const existingItem = cartItems.find((item) => item.id === removeItem.id);
    if(existingItem.quantity === 1) { 
        return cartItems.filter((item) => item.id !== removeItem.id);
    }
    return cartItems.map((item) => item.id===removeItem.id ? {...item, quantity: item.quantity - 1} : item);
}
const clearItem = (cartItems, itemToRemove) => cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    removeItemFromCart: () => null,
    clearItemFromCart: () => null,
    itemCount: 0,
    total: 0,
    setTotal: () => null
    
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const newItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
        setItemCount(newItemCount);
    }, [cartItems]);

    useEffect(() => {
        const total = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price , 0);
        setTotal(total);
    }, [cartItems]);

    const removeItemFromCart = (removeItem) => {
        setCartItems(decreaseItemCountFromCart(cartItems, removeItem));
        console.log(cartItems);
    }

    const addItemToCart = (item) => {
        setCartItems(addNewItemToCartItems(item, cartItems));
        console.log(cartItems);
    }

    const clearItemFromCart = (itemToRemove) => {
        setCartItems(clearItem(cartItems, itemToRemove));
    }


    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, itemCount, removeItemFromCart, setItemCount, clearItemFromCart, total};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



