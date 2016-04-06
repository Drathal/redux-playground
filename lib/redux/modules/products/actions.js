'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProduct = addProduct;
exports.deleteProduct = deleteProduct;
var ADD_PRODUCT = exports.ADD_PRODUCT = 'ADD_PRODUCT';
var DELETE_PRODUCT = exports.DELETE_PRODUCT = 'DELETE_PRODUCT';

/**
 * adds a product to the product list
 * @param  {number} productId
 * @return {action}
 */
function addProduct(product) {
  return { type: ADD_PRODUCT, product: product };
}

/**
 * deletes a product from the product list
 * @param  {number} productId
 * @return {action}
 */
function deleteProduct(productId) {
  return { type: DELETE_PRODUCT, productId: productId };
}