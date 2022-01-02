import { combineReducers } from 'redux';
import transactionLatestReducer from './transaction_latest_reducer';
import transactionCategoryReducer from './transaction_category_reducer';

export default combineReducers({
  category: transactionCategoryReducer,
  latest: transactionLatestReducer
});