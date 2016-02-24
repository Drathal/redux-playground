import { combineReducers } from 'redux'
import { ADD_PRODUCT, DELETE_PRODUCT } from './actions';

function product_items(state = {}, action = {}) {
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

function product_quantity(state = 0, action = {}) {
    switch (action.type) {
        case ADD_PRODUCT:
            return state + 1
        case DELETE_PRODUCT:
            return state - 1
        default:
            return state;
    }
}

export default combineReducers({
    items: product_items,
    quantity: product_quantity
})
