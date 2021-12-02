import { combineReducers } from "redux";
import transactionReducer from "./transaction_reducer";
import usersReducer from "./users_reducer";

export default combineReducers({
  users: usersReducer,
  transactions: transactionReducer
});