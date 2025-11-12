import { setCartItems, setIsCartOpen } from "./cart.action";
import { CART_REDUCER_ACTION_TYPES, CartItem } from "./cart.types";
import { AnyAction } from "redux";



export  type CartState = {
    readonly cartItems: CartItem[];
    readonly isCartOpen: boolean;

}

const INITIAL_STATE: CartState = {
    cartItems: [],
    isCartOpen: false,
}

export const cartReducer = (state = INITIAL_STATE, action : AnyAction) => {
    if(setIsCartOpen.match(action)) {
        return {...state, isCartOpen: action.payload}
    }

    if(setCartItems.match(action)) {
        return {...state, cartItems: action.payload}
    }
    return state;
}

