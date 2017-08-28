import { combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as app } from './App/reducer';
import { reducer as header } from '../components/Header/reducer';

const reducers = combineReducers({
  app,
  header,
  form: reduxFormReducer,
});

export default reducers;
