import { createAction } from "../../utils/reducer/reducers.utils";
import {CART_REDUCER_ACTION_TYPES} from "./cart.types"

export const setCartItems = (cartItems) => {
    createAction(CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS, cartItems)
}

export const setIsCartOpen = (boolean) => 
    createAction(CART_REDUCER_ACTION_TYPES.TOGGLE_IS_CART_OPEN, boolean);




const addNewItemToCartItems = (cartItems, newItem ) => {
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




export const removeItemFromCart = (cartItems, removeItem) => {
    const newCartItems = decreaseItemCountFromCart(cartItems, removeItem);
    return createAction(CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const addItemToCart = (cartItems, item) => {
    const newCartItems = addNewItemToCartItems(cartItems, item );
    return createAction(CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, itemToRemove) => {
    const newCartItems = clearItem(cartItems, itemToRemove);
    return createAction(CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}