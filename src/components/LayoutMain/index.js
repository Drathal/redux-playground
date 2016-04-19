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
                <AppBar fixed flat>
                    { t('appName') }
                    <nav className={ style.navigation }>
                        <ul>
                            <li>
                                <Link to="/" activeClassName='active'>
                                { t('productLink') }
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </AppBar>
                <Panel className={ style.mainPane }>
                    { props.children }
                </Panel>
            </Panel>
        </Layout>
    )
}

export default translate(['LayoutMain', 'common'])(LayoutMain);
