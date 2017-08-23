import { combineReducers } from 'redux';
import { reducer as app } from './App/reducer';

const reducers = combineReducers({
  app,
});

export default reducers;
