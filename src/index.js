import React from 'react';
import ReactDOM from 'react-dom';
import { App, reducers } from './containers';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
// TODO assess if needed
import registerServiceWorker from './func/registerServiceWorker';

import './styles/index.scss';

const history = createHistory();
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
