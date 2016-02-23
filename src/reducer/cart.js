import { combineReducers } from 'redux'
import cartItemsReducer from './cart_items'
import cartItemsQuantityReducer from './cart_items_quantity'

var cart = combineReducers({
    items: cartItemsReducer,
    quantity: cartItemsQuantityReducer
});

export default cart
