/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { App, DevTools, reducers } from './containers';
import middlewares from './middleware';
import registerServiceWorker from './func/registerServiceWorker';
import './styles/index.scss';

const history = createHistory();
const enhancer = compose(
  middlewares,
  DevTools.instrument()
);
const store = createStore(
  reducers,
  enhancer,
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route component={App} />
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
