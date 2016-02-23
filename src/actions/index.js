export const ADD_PRODUCT = 'ADD_PRODUCT';
export function addProductActionCreator(product) {
    return {type: 'ADD_PRODUCT', product}
}

export const ADD_TO_CART = 'ADD_TO_CART';
export function addToCartActionCreator(productId) {
    return {type: 'ADD_TO_CART', productId}
}
