import React from 'react';
import { Router, Route, browserHistory, IndexRoute, match } from 'react-router';

import LayoutDashboard from '../components/LayoutDashboard'
import LayoutMain from '../components/LayoutMain'
import NotFound from '../components/NotFound'

import ProductListContainer from '../containers/ProductListContainer'

export default (
<Router history={ browserHistory }>
    <Route path="/" component={ LayoutMain }>
        <IndexRoute component={ ProductListContainer } />
        <Route path="products" component={ ProductListContainer } />
    </Route>
    <Route path="/dashboard" component={ LayoutDashboard }>
        <IndexRoute component={ ProductListContainer } />
        <Route path="products" component={ ProductListContainer } />
    </Route>
    <Route path="*" component={ NotFound } />
</Router>
);
