import { 
  RECEIVE_TRANSACTION_TYPE,
  REMOVE_TRANSACTION_TYPE
} from "../../actions/transaction_actions";
import { RECEIVE_TRANSACTION } from "../../actions/transaction_actions";

export default function transactionCategoryReducer(state = null, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION_TYPE:
      return action.transactionCategory;
    case REMOVE_TRANSACTION_TYPE:
      return null;
    default:
      return state;
  }
}