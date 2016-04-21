import React, { PropTypes } from 'react'
import { translate } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'
import DevTools from '../../containers/DevTools';
import style from './style'

const LayoutMain = (props) => {

    const {t} = props;

    let NAV_LINKS = [
        {
            title: t('productLink'),
            link: '/products'
        },
        {
            title: t('notFoundLink'),
            link: '/404'
        }
    ]

    let links = NAV_LINKS.map(item => <li className={ props.activePage === item.link ? 'active' : null } key={ item.link }>
                                          <Link to={ item.link }>
                                          { item.title }
                                          </Link>
                                      </li>)

    return (
        <div className={ 'app' }>
            <Navbar fixed
                fluid
                staticTop
                componentClass="header"
                className={ style.navigation }
                role="banner">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                        { t('title') }
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse className="bs-navbar-collapse">
                    <Nav role="navigation" id="top">
                        { links }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className={ style.container + ' container' }>
                { props.children }
            </div>
            { process.env.NODE_ENV !== 'production' && <DevTools /> }
        </div>
    )
}


export default translate(['LayoutMain', 'common'])(LayoutMain);
