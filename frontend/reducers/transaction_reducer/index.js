import { combineReducers } from 'redux';
import transactionLatestReducer from './transaction_latest_reducer';
import transactionTypeReducer from './transaction_type_reducer';

export default combineReducers({
  type: transactionTypeReducer,
  latest: transactionLatestReducer
});