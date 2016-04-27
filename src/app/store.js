import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import DevTools from '../containers/DevTools';

import products from '../redux/modules/products'
import rootReducer from '../redux/modules/root'

var enhancer

if (process.env.NODE_ENV === 'development') {
    enhancer = compose(
        applyMiddleware(promiseMiddleware, thunkMiddleware),
        DevTools.instrument()
    );
} else {
    enhancer = compose(
        applyMiddleware(promiseMiddleware, thunkMiddleware)
    );
}

export default function makeStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        enhancer
    )
}
