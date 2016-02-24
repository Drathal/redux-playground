export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export function addProduct(product) {
    return {type: ADD_PRODUCT, product}
}

export function deleteProduct(productId) {
    return {type: DELETE_PRODUCT, productId}
}
