import React, { PropTypes } from 'react'
import messages from './en.json'
import CSSModules from 'react-css-modules';
import styles from './style.css';

import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';

const LayoutMain = (props) => {
    return (
        <div className="app">
            <AppBar title={ props.messages.title }
                    iconClassNameRight="muidocs-icon-navigation-expand-more" />
            { props.children }
        </div>

    )
}

LayoutMain.defaultProps = {messages};
LayoutMain.propTypes = {messages: PropTypes.object}

export default CSSModules(LayoutMain, styles, {errorWhenNotFound: false})
