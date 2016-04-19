import React, { PropTypes } from 'react'
import { Layout, AppBar, Panel } from 'react-toolbox';
import { translate } from 'react-i18next';
import { Link } from 'react-router'

import style from './style'

const LayoutMain = (props) => {

    const {t} = props;

    return (
        <Layout>
            <Panel>
                <AppBar fixed
                        flat>
                    { t('appName') }
                    <Link to="/">
                    { t('title') }
                    </Link>
                    <Link to="/404">
                    { t('notFound') }
                    </Link>
                </AppBar>
                <div className={ style.mainPane }>
                    { props.children }
                </div>
            </Panel>
        </Layout>
    )
}

export default translate(['LayoutMain', 'common'])(LayoutMain);
