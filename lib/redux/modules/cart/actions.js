'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_TO_CART = exports.ADD_TO_CART = 'ADD_TO_CART';
var DELETE_FROM_CART = exports.DELETE_FROM_CART = 'DELETE_FROM_CART';
var REMOVE_FROM_CART = exports.REMOVE_FROM_CART = 'REMOVE_FROM_CART';
var DECREMENT_CARTITEM_QUANTITY = exports.DECREMENT_CARTITEM_QUANTITY = 'DECREMENT_CARTITEM_QUANTITY';
var INCREMENT_CARTITEM_QUANTITY = exports.INCREMENT_CARTITEM_QUANTITY = 'INCREMENT_CARTITEM_QUANTITY';

/**
 * adds a product to the cart and update the quantity
 * @param  {number} productId
 * @return {action}
 */
var addItem = exports.addItem = function addItem(productId) {
  return { type: ADD_TO_CART, productId: productId };
};

/**
 * delete product completly from cart
 * @param  {number} productId
 * @return {action}
 */
var deleteItem = exports.deleteItem = function deleteItem(productId) {
  return { type: DELETE_FROM_CART, productId: productId };
};

/**
 * decrement product quantity from cart
 * @param  {number} productId
 * @return {action}
 */
var decrementQuantity = exports.decrementQuantity = function decrementQuantity(productId) {
  return { type: DECREMENT_CARTITEM_QUANTITY, productId: productId };
};

/**
 * inccrement product quantity from cart
 * @param  {number} productId
 * @return {action}
 */
var incrementQuantity = exports.incrementQuantity = function incrementQuantity(productId) {
  return { type: INCREMENT_CARTITEM_QUANTITY, productId: productId };
};