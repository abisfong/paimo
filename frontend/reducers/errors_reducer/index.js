import { combineReducers } from "redux";
import userErrorsReducer from "./user_errors_reducer";
import authErrorsReducer from "./auth_errors_reducer";
import transactionErrorsReducer from './transaction_errors_reducer';

const data = { errorCount: 0 };

export default combineReducers({
  auth: authErrorsReducer(data),
  user: userErrorsReducer(data),
  transaction: transactionErrorsReducer(data)
});