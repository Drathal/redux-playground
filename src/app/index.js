import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes';
import makeStore from './store'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = makeStore();

render(
    <Provider store={ store }>
        { routes }
    </Provider>,
    document.getElementById('root')
)
