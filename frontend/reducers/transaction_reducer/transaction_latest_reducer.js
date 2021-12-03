import { 
  RECEIVE_LATEST_TRANSACTION
} from "../../actions/transaction_actions";

export default function transactionLatestReducer(state = null, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LATEST_TRANSACTION:
      return action.transaction;
    default:
      return state;
  }
}