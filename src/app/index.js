import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import makeStore from './store'
import config from '../../config/default'
import { getProducts } from '../api/product'
import { addProduct } from '../redux/modules/products/actions'
import Root from '../containers/Root'

const store = makeStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store)
const rootEl = document.getElementById('root')

getProducts(config.endpoint.productApi).then(response => {
    response.data.map(product => {
        store.dispatch(addProduct(product))
    })
})

render(
    <AppContainer component={ Root } props={ {store, history} } />,
    rootEl
);

if (module.hot) {
    module.hot.accept('../containers/Root', () => {
        render(
            <AppContainer component={ require('../containers/Root').default } props={ {store, history} } />,
            rootEl
        );
    });
}
