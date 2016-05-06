import React, { PropTypes } from 'react'
import { translate } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'
import style from './style'

const LayoutDashboard = (props) => {

    const { t } = props;

    const NAV_LINKS = [
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
        <div className={ 'app layout layout-dashboard' }>
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
            <aside className={ `${style.sidemenu} app-aside` }>
                <div className={ `${style.sidemenuBody}` }>
                    <nav className="navi">
                        <ul className="nav">
                            <li>
                                <span>Navigation</span>
                            </li>
                            <li className="line"></li>
                            <li>
                                <a href="">menu 1</a>
                                <ul className="nav nav-sub">
                                    <li>
                                        <a href="">menu 2</a>
                                    </li>
                                    <li>
                                        <a href="">menu 3</a>
                                    </li>
                                    <li>
                                        <a href="">menu 4</a>
                                    </li>
                                    <li>
                                        <a href="">menu 5</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div className={ `${style.container} app-content` }>
                <div className={ `${style.containerBody} app-content-body` }>
                    { props.children }
                </div>
            </div>
        </div>
    )
}

LayoutDashboard.propTypes = {
    t: PropTypes.func.isRequired,
    activePage: PropTypes.func,
    children: PropTypes.node
}

export default translate(['LayoutDashboard', 'common'])(LayoutDashboard);
