export const ADD_PRODUCT = 'product/ADD_PRODUCT';
export const DELETE_PRODUCT = 'product/DELETE_PRODUCT';

/**
 * adds a product to the product list
 * @param  {number} productId
 * @return {action}
 */
export function addProduct(product) {
    return {type: ADD_PRODUCT, product}
}

/**
 * deletes a product from the product list
 * @param  {number} productId
 * @return {action}
 */
export function deleteProduct(id) {
    return {type: DELETE_PRODUCT, id}
}
