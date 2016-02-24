import { ADD_PRODUCT } from './actions';

export default function (state = {}, action = {}) {
    switch (action.type) {
        case ADD_PRODUCT:
            const {id} = action.product;
            return {
                ...state,
                [id]: action.product
            };
        default:
            return state;
    }
}
