import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import LayoutMain from '../components/layouts/LayoutMain'

import ProductListContainer from '../components/containers/ProductListContainer'

export default (
<Router history={ browserHistory }>
    <Route component={ LayoutMain }>
        <Route path="/" component={ ProductListContainer } />
    </Route>
</Router>
);
