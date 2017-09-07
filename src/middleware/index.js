import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const middlewares = applyMiddleware(
  logger,
  thunk,
);

export default middlewares;
