import { 
  RECEIVE_TRANSACTION,
  RECEIVE_TRANSACTIONS,
  REMOVE_TRANSACTION
} from "../../actions/transaction_actions";

export default function transactionReducer(state = {}, action) {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      nextState[action.transaction.id] = action.transaction;
      return nextState;
    case RECEIVE_TRANSACTIONS:
      action.transactions.forEach(transaction => {
        nextState[transaction.id] = transaction;
      });
      return nextState;
    case REMOVE_TRANSACTION:
      delete nextState[action.transaction.id];
      return nextState;
    default:
      return state;
  }
}