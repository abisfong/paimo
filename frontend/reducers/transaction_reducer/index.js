import { combineReducers } from 'redux';
import transactionTypeReducer from './transaction_type_reducer';

export default combineReducers({
  type: transactionTypeReducer
});