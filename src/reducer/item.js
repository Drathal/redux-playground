var itemsReducer = function(state = [], action) {
    console.log('itemsReducer was called with state', state, 'and action', action)

    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]
        default:
            return state;
    }
}

export default itemsReducer
