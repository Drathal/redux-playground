import React, { PropTypes } from 'react'
import { Layout, AppBar, Panel } from 'react-toolbox';
import { translate } from 'react-i18next';

import style from './style'
import messages from './en.json'

const LayoutMain = (props) => {

    const {t} = props;

    return (
        <Layout>
            <Panel>
                <AppBar fixed
                        flat>
                    <a href="/">
                        { t('common.appName') }
                        { props.messages.title }
                    </a>
                    <a href="/404">
                        { props.messages.notFound }
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

export default translate(['common', 'LayoutMain'])(LayoutMain);
