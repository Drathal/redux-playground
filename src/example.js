import { createStore, combineReducers } from 'redux'
import itemsReducer from './reducer/item'

var reducer = combineReducers({items: itemsReducer})
var store_0 = createStore(reducer)

store_0.subscribe(function() {
    console.log('store_0 has been updated. Latest store state:', store_0.getState());
})

var addItemActionCreator = function(item) {
    return {type: 'ADD_ITEM', item: item}
}

store_0.dispatch(addItemActionCreator({id: 1234, description: 'anything'}))
