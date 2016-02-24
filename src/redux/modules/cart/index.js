import { combineReducers } from 'redux'
import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_FROM_CART, INCREMENT_CARTITEM_QUANTITY, DECREMENT_CARTITEM_QUANTITY } from './actions';

const initialState = {
    items: [],
    quantityById: {}
}

const quantityById = (state = initialState.quantityById, action) => {

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

const items = (state = initialState.items, action) => {

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

    // Ok i have to refactor that ;D
    let newAction = {...action};

    switch (action.type) {
        case REMOVE_FROM_CART:
            if (state.quantityById[action.productId] === 1) {
                newAction.type = DELETE_FROM_CART
            } else {
                newAction.type = DECREMENT_CARTITEM_QUANTITY
            }
    }

    return {
        items: items(state.items, newAction),
        quantityById: quantityById(state.quantityById, newAction)
    };
}
