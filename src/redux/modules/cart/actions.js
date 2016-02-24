export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const DECREMENT_CARTITEM_QUANTITY = 'DECREMENT_CARTITEM_QUANTITY';
export const INCREMENT_CARTITEM_QUANTITY = 'INCREMENT_CARTITEM_QUANTITY';

export function addItem(productId) {
    return {type: ADD_TO_CART, productId}
}

export function deleteItem(productId) {
    return {type: DELETE_FROM_CART, productId}
}

export function decrementQuantity(productId) {
    return {type: DECREMENT_CARTITEM_QUANTITY, productId}
}

export function incrementQuantity(productId) {
    return {type: INCREMENT_CARTITEM_QUANTITY, productId}
}

export function removeItem(productId) {
    return (dispatch, getState) => {
        if (getState().quantityById[productId] > 1) {
            return deleteCartItem(productId)
        }
        return decrementCartItemQuantity(productId)
    }
}
