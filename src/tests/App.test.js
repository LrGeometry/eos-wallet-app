import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter, Route } from 'react-router';
import App from '../containers/App';
import createHistory from 'history/createBrowserHistory';
import { observer } from 'mobx-react';

const history = createHistory();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const staticContext = {};

  ReactDOM.render(
    <StaticRouter location="/" context={staticContext}>
      <App />
    </StaticRouter>,
    div,
  );
});
