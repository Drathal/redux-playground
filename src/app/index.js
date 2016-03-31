import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import makeStore from './store'
import App from '../containers/App'

import * as productAction from '../redux/modules/products/actions';

let store = makeStore();

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)
