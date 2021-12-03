import { 
  RECEIVE_TRANSACTION_TYPE,
  REMOVE_TRANSACTION_TYPE
} from "../../actions/transaction_actions";
import { RECEIVE_TRANSACTION } from "../../actions/transaction_actions";

export default function transactionTypeReducer(state = null, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION_TYPE:
      return action.transactionType;
    case REMOVE_TRANSACTION_TYPE:
      return null;
    default:
      return state;
  }
}