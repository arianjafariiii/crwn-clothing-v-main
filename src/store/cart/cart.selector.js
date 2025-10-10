import { createSelector } from "reselect";



export const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cartReducer) => cartReducer.isCartOpen
)

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartReducerItems) => cartReducerItems.cartItems
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price , 0)
)