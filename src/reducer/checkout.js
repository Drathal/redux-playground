import { combineReducers } from 'redux'
import productsReducer from './products'
import cartReducer from './cart'

const checkout = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export default checkout
