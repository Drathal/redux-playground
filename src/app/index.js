import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'
import routes from './routes'
import makeStore from './store'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

let store = makeStore();

render(
    <I18nextProvider i18n={ i18n }>
        <Provider store={ store }>
            { routes }
        </Provider>
    </I18nextProvider>,
    document.getElementById('root')
)
