import { ADD_PRODUCT, DELETE_PRODUCT } from './actions';

export default function (state = {}, action = {}) {
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
