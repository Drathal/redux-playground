import React, { PropTypes } from 'react'
import messages from './en.json'
import CSSModules from 'react-css-modules';
import styles from './style.css';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';
import { deepOrange500 } from 'material-ui/lib/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

const LayoutMain = (props) => {
    return (
        <MuiThemeProvider muiTheme={ muiTheme }>
            <div className="app">
                <AppBar title={ props.messages.title }
                        iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <Paper zDepth={ 2 }
                       styleName='paperContainer'>
                    { props.children }
                </Paper>
            </div>
        </MuiThemeProvider>
    )
}

LayoutMain.defaultProps = {messages};
LayoutMain.propTypes = {messages: PropTypes.object}

export default CSSModules(LayoutMain, styles, {errorWhenNotFound: false})
