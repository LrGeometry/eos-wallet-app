import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as app } from './App/reducer';
import { reducer as header } from '../components/Header/reducer';
import { reducer as transactions } from './Transactions/reducer';

const reducers = combineReducers({
  app,
  header,
  transactions,
  form: reduxFormReducer,
});

export default reducers;
