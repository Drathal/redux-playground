import React, { PropTypes } from 'react'
import { translate } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'
import style from './style'

const LayoutMain = (props) => {

    const {t} = props;

    let NAV_LINKS = [
        {
            title: t('productLink'),
            link: '/dashboard/products'
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
        <div className={ 'app layout layout-main' }>
            <Navbar fixed
                fluid
                staticTop
                componentClass="header"
                className={ style.navigation }
                role="banner">
                <Navbar.Header>
                    <Navbar.Brand className={ style.navigationHeader }>
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
            <div className={ style.container + ' app-content' }>
                <div className={ style.containerBody + ' app-content-body' }>
                    { props.children }
                </div>
            </div>
        </div>
    )
}


export default translate(['LayoutMain', 'common'])(LayoutMain);
