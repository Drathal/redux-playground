import React, { PropTypes } from 'react'
import { Layout, AppBar, Panel } from 'react-toolbox';
import { translate } from 'react-i18next';

import style from './style'

const LayoutMain = (props) => {

    const {t} = props;

    return (
        <Layout>
            <Panel>
                <AppBar fixed
                        flat>
                    { t('appName') }
                    <a href="/">
                        { t('title') }
                    </a>
                    <a href="/404">
                        { t('notFound') }
                    </a>
                </AppBar>
                <div className={ style.mainPane }>
                    { props.children }
                </div>
            </Panel>
        </Layout>
    )
}

export default translate(['LayoutMain', 'common'])(LayoutMain);
