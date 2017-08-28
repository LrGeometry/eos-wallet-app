import { combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as app } from './App/reducer';

const reducers = combineReducers({
  app,
  form: reduxFormReducer,
});

export default reducers;
