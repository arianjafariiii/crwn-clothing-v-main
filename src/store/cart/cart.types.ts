import { CategoryItem } from "../categories/categories.types";

export type CartItem = CategoryItem & {
    quantity: number
}


export enum CART_REDUCER_ACTION_TYPES {
    SET_CART_ITEMS= "SET_CART_ITEMS",
    TOGGLE_IS_CART_OPEN= "TOGGLE_IS_CART_OPEN",
}