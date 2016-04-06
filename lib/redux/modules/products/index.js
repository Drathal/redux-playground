'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = products;

var _redux = require('redux');

var _actions = require('./actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
    items: {},
    itemList: [],
    quantity: 0
};

function items() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.items : arguments[0];
    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    switch (action.type) {
        case _actions.ADD_PRODUCT:
            var id = action.product.id;

            return _extends({}, state, _defineProperty({}, id, action.product));
        case _actions.DELETE_PRODUCT:
            if (!state.hasOwnProperty(action.productId)) {
                return state;
            }

            var newState = _extends({}, state);
            delete newState[action.productId];
            return newState;
        default:
            return state;
    }
}

function getQuantity(items) {
    return Object.keys(items).length;
}

function getItemList(items) {
    var list = [];
    Object.keys(items).map(function (productId) {
        list = [].concat(_toConsumableArray(list), [items[productId]]);
    });
    return list;
}

/**
 * main cart reducer
 */
function products() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];


    switch (action.type) {
        case _actions.ADD_PRODUCT:
        case _actions.DELETE_PRODUCT:
            return {
                items: items(state.items, action),
                itemList: getItemList(items(state.items, action)),
                quantity: getQuantity(items(state.items, action))
            };
        default:
            return state;
    }
}