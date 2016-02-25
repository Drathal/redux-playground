import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import App from '../containers/App'

/*
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()]

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

 store={ store }
*/

render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
)
