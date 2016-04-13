import React, { PropTypes } from 'react'
import messages from './en.json'
import { Layout, AppBar, Panel } from 'react-toolbox';
import style from './style'

const LayoutMain = (props) => {
    return (
        <Layout>
            <Panel>
                <AppBar fixed
                        flat>
                    <a href="/">
                        { props.messages.title }
                    </a>
                </AppBar>
                <div className={ style.mainPane }>
                    { props.children }
                </div>
            </Panel>
        </Layout>

    )
}

LayoutMain.defaultProps = {messages};
LayoutMain.propTypes = {messages: PropTypes.object}

export default LayoutMain
