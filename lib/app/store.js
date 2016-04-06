'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = makeStore;

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _redux = require('redux');

var _products = require('../redux/modules/products');

var _products2 = _interopRequireDefault(_products);

var _cart = require('../redux/modules/cart');

var _cart2 = _interopRequireDefault(_cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var loggerMiddleware = (0, _reduxLogger2.default)({ downArrow: '*', rightArrow: '>' });

function makeStore() {
    var enableLogger = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];


    var middleware = [_reduxPromise2.default, _reduxThunk2.default];

    if (enableLogger) {
        middleware = [].concat(_toConsumableArray(middleware), [loggerMiddleware]);
    }

    return (0, _redux.createStore)((0, _redux.combineReducers)({ products: _products2.default, cart: _cart2.default }), _redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware)));
}