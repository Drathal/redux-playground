export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREMENT_CARTITEM_QUANTITY = 'DECREMENT_CARTITEM_QUANTITY';
export const INCREMENT_CARTITEM_QUANTITY = 'INCREMENT_CARTITEM_QUANTITY';

/* action creators */

export const addItem = (productId) => {
    return {type: ADD_TO_CART, productId}
}

export const deleteItem = (productId) => {
    return {type: DELETE_FROM_CART, productId}
}

export const decrementQuantity = (productId) => {
    return {type: DECREMENT_CARTITEM_QUANTITY, productId}
}

export const incrementQuantity = (productId) => {
    return {type: INCREMENT_CARTITEM_QUANTITY, productId}
}
