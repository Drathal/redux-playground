import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import DevTools from '../containers/DevTools';

import products from '../redux/modules/products'

const enhancer = compose(
    applyMiddleware(promiseMiddleware, thunkMiddleware),
    DevTools.instrument()
);

const rootReducer = combineReducers({products})

export default function makeStore(initialState) {

    return createStore(
        rootReducer,
        initialState,
        enhancer
    )
}
