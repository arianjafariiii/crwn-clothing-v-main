import { createContext, useReducer } from "react";
import { createAction } from "../../utils/reducer/reducers.utils";

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
    isCartOpen: true,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    removeItemFromCart: () => null,
    clearItemFromCart: () => null,
    itemCount: 0,
    total: 0,
    setTotal: () => null
    
});


const CART_REDUCER_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN"
}


const cartReducer = (state, action) => {
    const{type, payload} = action;
    switch(type){
        case CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_REDUCER_ACTION_TYPES.TOGGLE_IS_CART_OPEN: 
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            }    
        default:
            throw new Error(`unhandeled ${type}`);
    }
}


const INITIAL_STATE = {
    cartItems: [],
    itemCount: 0,
    total: 0,
    isCartOpen: false,
}

export const CartProvider = ({children}) => {
    const [{cartItems, itemCount, isCartOpen, total}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const updateCartItemsReducer = (newCartItems) => {
        const newItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price , 0);
        dispatch(createAction(CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems, itemCount: newItemCount, total: newTotal}))
    }

    const toggleIsCartOpenReducer = () => {
        dispatch({type: CART_REDUCER_ACTION_TYPES.TOGGLE_IS_CART_OPEN})
    }

    const removeItemFromCart = (removeItem) => {
        const newCartItems = decreaseItemCountFromCart(cartItems, removeItem);
        updateCartItemsReducer(newCartItems);
    }

    const addItemToCart = (item) => {
        const newCartItems = addNewItemToCartItems(item, cartItems);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (itemToRemove) => {
        const newCartItems = clearItem(cartItems, itemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = () => {
        toggleIsCartOpenReducer()
    }
    

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, itemCount, removeItemFromCart, clearItemFromCart, total};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



