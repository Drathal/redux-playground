export const ADD_TO_CART = 'ADD_TO_CART';

export function addCartItem(productId) {
    return {type: 'ADD_TO_CART', productId}
}
