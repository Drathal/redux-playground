import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import makeStore from './store'
import App from '../containers/App'

import * as productAction from '../redux/modules/products/actions';

let store = makeStore();

store.dispatch(productAction.addProduct({'id': 3, 'description': 'product 3'}))
store.dispatch(productAction.addProduct({'id': 1, 'description': 'product 1'}))
store.dispatch(productAction.addProduct({'id': 2, 'description': 'product 2'}))

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)
