import { Action } from "redux-saga";
import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducers.utils";
import { CategoryItem } from "../categories/categories.types";
import {CART_REDUCER_ACTION_TYPES, CartItem} from "./cart.types"





const addNewItemToCartItems = (cartItems: CartItem[], newItem: CategoryItem ) : CartItem[]=> {
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

const decreaseItemCountFromCart = (cartItems: CartItem[], removeItem: CartItem): CartItem[] => {
    const existingItem = cartItems.find((item) => item.id === removeItem.id);
    if(existingItem && existingItem.quantity === 1) { 
        return cartItems.filter((item) => item.id !== removeItem.id);
    }
    return cartItems.map((item) => item.id===removeItem.id ? {...item, quantity: item.quantity - 1} : item);
}



const clearItem = (cartItems: CartItem[], itemToRemove: CartItem): CartItem[] => cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)


//.................................................................

export type SetIsCartOpen = ActionWithPayload<CART_REDUCER_ACTION_TYPES.TOGGLE_IS_CART_OPEN, boolean>
export type SetCartItems = ActionWithPayload<CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>






export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => 
    createAction(CART_REDUCER_ACTION_TYPES.TOGGLE_IS_CART_OPEN, boolean));


export const setCartItems = withMatcher((cartItems: CartItem[]):SetCartItems   => 
    createAction(CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS, cartItems))



export const removeItemFromCart = (cartItems: CartItem[], removeItem: CartItem) => {
    const newCartItems = decreaseItemCountFromCart(cartItems, removeItem);
    setCartItems(newCartItems);
}

export const addItemToCart = (cartItems: CartItem[], item: CategoryItem) => {
    const newCartItems = addNewItemToCartItems(cartItems, item );
    setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems: CartItem[], itemToRemove: CartItem) => {
    const newCartItems = clearItem(cartItems, itemToRemove);
    setCartItems(newCartItems);
}