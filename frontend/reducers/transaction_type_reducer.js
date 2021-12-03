import { 
  RECEIVE_TRANSACTION_TYPE
} from "../../actions/transaction_actions";

export default function transactionTypeReducer(state = null, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION_TYPE:
      return action.type;
    default:
      return state;
  }
}