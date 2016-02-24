import { combineReducers } from 'redux'
import { ADD_TO_CART, DELETE_FROM_CART, INCREMENT_CARTITEM_QUANTITY, DECREMENT_CARTITEM_QUANTITY } from './actions';

const initialState = {
    items: [],
    quantityById: {}
}

function cart_items_quantity(state = initialState.quantityById, action) {

    switch (action.type) {
        case ADD_TO_CART:
            const {productId} = action;
            return {
                ...state,
                [productId]: (state[productId] || 0) + 1
            };
        case INCREMENT_CARTITEM_QUANTITY:
            if (!state.hasOwnProperty(action.productId)) {
                return state;
            }
            return {
                ...state,
                [action.productId]: state[action.productId] + 1
            }
        case DECREMENT_CARTITEM_QUANTITY:
            if (!state.hasOwnProperty(action.productId)) {
                return state;
            }
            return {
                ...state,
                [action.productId]: state[action.productId] - 1
            }
        case DELETE_FROM_CART:
            if (!state.hasOwnProperty(action.productId)) {
                return state;
            }
            const newState = {...state}
            delete newState[action.productId]
            return newState
        default:
            return state;
    }
}

function cart_items(state = initialState.items, action) {

    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.productId) !== -1) {
                return state;
            }
            return [...state, action.productId];
        case DELETE_FROM_CART:
            let index = state.findIndex(i => i === action.productId);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        default:
            return state;
    }
}

export default function cart(state = initialState, action) {
    switch (action.type) {
        default:
            return {
                items: cart_items(state.items, action),
                quantityById: cart_items_quantity(state.quantityById, action)
            };
    }
}
