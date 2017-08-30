import { combineReducers } from 'redux';
import { menu } from './App/reducers';
import { reducer as balance } from './BalanceContainer/reducer';
import { reducer as login } from './LoginContainer/reducer';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as transactions } from './TransactionsContainer/reducer';
import { reducer as user } from './UserContainer/reducer';
import { reducer as users } from './UsersContainer/reducer';

const reducers = combineReducers({
  balance,
  form: reduxFormReducer,
  login,
  menu,
  transactions,
  user,
  users,
});

export default reducers;
