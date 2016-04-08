import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes';
import makeStore from './store'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/lib/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

let store = makeStore();

render(
    <MuiThemeProvider muiTheme={ muiTheme }>
        <Provider store={ store }>
            { routes }
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
)
