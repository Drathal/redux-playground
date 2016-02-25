import { combineReducers } from 'redux'
import { ADD_PRODUCT, DELETE_PRODUCT } from './actions';

const initialState = {
    items: {},
    quantity: 0
}

function items(state = initialState.items, action = {}) {
    switch (action.type) {
        case ADD_PRODUCT:
            const {id} = action.product;
            return {
                ...state,
                [id]: action.product
            };
        case DELETE_PRODUCT:
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

function getQuantity(items) {
    return Object.keys(items).length
}

/**
 * main cart reducer
 */
export default function products(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT:
        case DELETE_PRODUCT:
            return {
                items: items(state.items, action),
                quantity: getQuantity(items(state.items, action))
            };
        default:
            return state;
    }
}
