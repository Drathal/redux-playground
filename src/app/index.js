import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import makeStore from './store'
import App from '../containers/App'

let store = makeStore();

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)
