export default function cart_items_quantity(state = {}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const {productId} = action;
            return {
                ...state,
                [productId]: (state[productId] || 0) + 1
            };
        default:
            return state;
    }
}
