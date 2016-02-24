import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-node-logger'
import promiseMiddleware from 'redux-promise'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import productsReducer from '../redux/modules/products'
import cartReducer from '../redux/modules/cart'

const loggerMiddleware = createLogger({downArrow: '*', rightArrow: '>'})

export default function makeStore() {
    return createStore(
        combineReducers({
            products: productsReducer,
            cart: cartReducer
        }),
        applyMiddleware(
            promiseMiddleware,
            thunkMiddleware,
            loggerMiddleware
        )
    )
}
