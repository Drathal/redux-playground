'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = cart;

var _redux = require('redux');

var _actions = require('./actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
    items: [],
    quantityById: {}
};

/**
 * manage quantity for cart items
 */
var quantityById = function quantityById() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.quantityById : arguments[0];
    var action = arguments[1];


    switch (action.type) {
        case _actions.ADD_TO_CART:
            var productId = action.productId;

            return _extends({}, state, _defineProperty({}, productId, (state[productId] || 0) + 1));
        case _actions.INCREMENT_CARTITEM_QUANTITY:
            if (!state.hasOwnProperty(action.productId)) {
                return state;
            }
            return _extends({}, state, _defineProperty({}, action.productId, state[action.productId] + 1));
        case _actions.DECREMENT_CARTITEM_QUANTITY:
            if (!state.hasOwnProperty(action.productId)) {
                return state;
            }
            return _extends({}, state, _defineProperty({}, action.productId, state[action.productId] - 1));
        case _actions.DELETE_FROM_CART:
            if (!state.hasOwnProperty(action.productId)) {
                return state;
            }
            var newState = _extends({}, state);
            delete newState[action.productId];
            return newState;
        default:
            return state;
    }
};

/**
 * manage unique cart items
 */
var items = function items() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.items : arguments[0];
    var action = arguments[1];


    switch (action.type) {
        case _actions.ADD_TO_CART:
            if (state.indexOf(action.productId) !== -1) {
                return state;
            }
            return [].concat(_toConsumableArray(state), [action.productId]);
        case _actions.DELETE_FROM_CART:
            var index = state.findIndex(function (i) {
                return i === action.productId;
            });
            return [].concat(_toConsumableArray(state.slice(0, index)), _toConsumableArray(state.slice(index + 1)));
        default:
            return state;
    }
};

/**
 * main cart reducer
 */
function cart() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];


    var newAction = _extends({}, action);

    switch (action.type) {
        // when item quantity is 1 then completly remove item
        case _actions.DECREMENT_CARTITEM_QUANTITY:
            if (state.quantityById[action.productId] === 1) {
                newAction.type = _actions.DELETE_FROM_CART;
            }
    }

    return {
        items: items(state.items, newAction),
        quantityById: quantityById(state.quantityById, newAction)
    };
}