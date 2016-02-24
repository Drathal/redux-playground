import { createStore, combineReducers } from 'redux'
import productsReducer from '../redux/modules/products'
import cartReducer from '../redux/modules/cart'

export default function makeStore() {
    return createStore(combineReducers({
        products: productsReducer,
        cart: cartReducer
    }))
}
