import { createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { routerMiddleware } from 'react-router-redux'

import DevTools from '../containers/DevTools';
import rootReducer from '../redux/modules/root'

export default function makeStore(initialState = {}, history) {

    let middlewares = applyMiddleware(thunkMiddleware, promiseMiddleware, routerMiddleware(history))

    if (process.env.NODE_ENV === 'development') {
        middlewares = compose(middlewares, DevTools.instrument())
    }

    const store = middlewares(createStore)(rootReducer, initialState)

    // hot module replacement for reducer
    if (module.hot) {
        module.hot.accept('../redux/modules/root', () => {
            const nextRootReducer = require('../redux/modules/root').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
