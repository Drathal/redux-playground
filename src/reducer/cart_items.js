export default function cart_items(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.indexOf(action.productId) !== -1) {
                return state;
            }
            return [...state, action.productId];
        default:
            return state;
    }
}
