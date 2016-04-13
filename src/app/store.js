import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import products from '../redux/modules/products'
import cart from '../redux/modules/cart'

export default function makeStore() {

    var middleware = [promiseMiddleware, thunkMiddleware]

    return createStore(
        combineReducers({products, cart}),
        applyMiddleware(...middleware)
    )
}
