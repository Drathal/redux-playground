import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App'
import LayoutDashboard from '../components/LayoutDashboard'
import LayoutMain from '../components/LayoutMain'
import NotFound from '../components/NotFound'

import ProductListContainer from '../containers/ProductListContainer'

export default (
<Route component={ App }>
    { /* LayoutMain */ }
    <Route path="/" component={ LayoutMain }>
        <IndexRoute component={ ProductListContainer } />
        <Route path="products" component={ ProductListContainer } />
    </Route>
    { /* LayoutDashboard */ }
    <Route path="/dashboard" component={ LayoutDashboard }>
        <IndexRoute component={ ProductListContainer } />
        <Route path="products" component={ ProductListContainer } />
    </Route>
    { /* not found */ }
    <Route path="*" component={ NotFound } />
</Route>
);
