import { AnyAction } from "redux-saga";
import { CART_REDUCER_ACTION_TYPES, CartItem } from "./cart.types";
import { setIsCartOpen, setCartItems } from "./cart.action";

export type CartState = {
    cartItems: CartItem[];
    isCartOpen: boolean;
}

const INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false,
}

export const cartReducer = (state = INITIAL_STATE, action : AnyAction) => {
    
    if(setIsCartOpen.match(action)) {
        return {
                ...state,
                isCartOpen: action.payload
            }
    }
    if(setCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload
        }
    }
    return state;
    
    
    
    
    
    
    
    // const{type, payload} = action;
    // switch(type){
    //     case CART_REDUCER_ACTION_TYPES.SET_CART_ITEMS:
    //         return {
    //             ...state,
    //             cartItems: payload
    //         }
    //     case CART_REDUCER_ACTION_TYPES.TOGGLE_IS_CART_OPEN: 
    //         return {
    //             ...state,
    //             isCartOpen: payload
    //         }    
    //     default:
    //         return state
    // }
}

