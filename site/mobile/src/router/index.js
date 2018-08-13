import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import routes from './config';

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.path === '/'}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )} />
);

const RouteConfig = () => (
  <Router>
    <ScrollToTop>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </ScrollToTop>
  </Router>
);

export default RouteConfig;
