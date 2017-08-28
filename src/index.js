/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { App, reducers } from './containers';
import middlewares from './middleware';
import registerServiceWorker from './func/registerServiceWorker';
import './styles/index.scss';

const history = createHistory();
const store = createStore(
  reducers,
  middlewares,
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
