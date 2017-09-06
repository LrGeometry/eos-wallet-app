import React from 'react';
import Switch from 'react-router/Switch';
import Route from 'react-router/Route';
import Redirect from 'react-router/Redirect';

const renderRoutes = (routes, extraProps = {}, switchProps = {}) => (
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => (
            route.authReq && !extraProps.auth ?
              <Redirect
                key={`redirect-${route.path}`}
                from={route.path}
                to="/login"
              />
              : <route.component {...props} {...extraProps} route={route} routes={route.routes} />
          )}
        />
      ))}
    </Switch>
  ) : null
);

export default renderRoutes;
