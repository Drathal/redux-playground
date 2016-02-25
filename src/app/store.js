import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import products from '../redux/modules/products'
import cart from '../redux/modules/cart'

const loggerMiddleware = createLogger({downArrow: '*', rightArrow: '>'})

export default function makeStore(enableLogger = false) {

    var middleware = [promiseMiddleware, thunkMiddleware]

    if (enableLogger) {
        middleware = [...middleware, loggerMiddleware]
    }

    return createStore(
        combineReducers({products, cart}),
        applyMiddleware(...middleware)
    )
}
