import { CategoryItem } from "../categories/categories.types";

export enum CART_REDUCER_ACTION_TYPES  {
    SET_CART_ITEMS= "SET_CART_ITEMS",
    TOGGLE_IS_CART_OPEN= "TOGGLE_IS_CART_OPEN"
}


export type CartItem = CategoryItem & {
    quantity: number
}