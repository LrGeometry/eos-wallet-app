import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter, Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import App from './';
import reducers from '../reducers';

const history = createHistory();
const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const staticContext = {};

  ReactDOM.render(
    <StaticRouter location="/" context={staticContext}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    div,
  );
});
