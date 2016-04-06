'use strict';

var _chai = require('chai');

var _store = require('../app/store');

var _store2 = _interopRequireDefault(_store);

var _actions = require('./modules/products/actions');

var productAction = _interopRequireWildcard(_actions);

var _actions2 = require('./modules/cart/actions');

var cartAction = _interopRequireWildcard(_actions2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('store', function () {

    var product1 = { 'id': 1, 'description': 'product 1' };
    var product2 = { 'id': 2, 'description': 'product 2' };
    var product3 = { 'id': 3, 'description': 'product 3' };

    it('can dispatch cart and product actions', function () {

        var store = (0, _store2.default)(false);

        var stateBefore = {
            products: {
                items: {},
                itemList: [],
                quantity: 0
            },
            cart: {
                items: [],
                quantityById: {}
            }
        };

        var stateAfter = {
            products: {
                items: { '1': product1, '2': product2 },
                itemList: [product1, product2],
                quantity: 2
            },
            cart: {
                items: [2, 1],
                quantityById: { '1': 2, '2': 2 }
            }
        };

        (0, _chai.expect)(store.getState()).to.deep.equal(stateBefore);

        // adding some products
        store.dispatch(productAction.addProduct(product1));
        store.dispatch(productAction.addProduct(product2));
        store.dispatch(productAction.addProduct(product2));
        store.dispatch(productAction.addProduct(product3));

        // add products to cart
        store.dispatch(cartAction.addItem(2));
        store.dispatch(cartAction.addItem(2));
        store.dispatch(cartAction.addItem(1));
        store.dispatch(cartAction.addItem(1));
        store.dispatch(cartAction.addItem(1));

        // remove product from products
        store.dispatch(productAction.deleteProduct(3));

        // decrement product quantity in cart
        store.dispatch(cartAction.decrementQuantity(1));

        (0, _chai.expect)(store.getState()).to.deep.equal(stateAfter);
    });
});