import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import DevTools from '../containers/DevTools';

import products from '../redux/modules/products'

var enhancer

if (process.env.NODE_ENV !== 'production') {
    enhancer = compose(
        applyMiddleware(promiseMiddleware, thunkMiddleware),
        DevTools.instrument()
    );
} else {
    enhancer = compose(
        applyMiddleware(promiseMiddleware, thunkMiddleware)
    );
}

const rootReducer = combineReducers({products})

export default function makeStore(initialState) {

    return createStore(
        rootReducer,
        initialState,
        enhancer
    )
}
