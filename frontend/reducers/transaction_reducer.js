import { 
  RECEIVE_TRANSACTION,
  REMOVE_TRANSACTION
} from "../actions/auth_actions";

const nullSate = {
  currentUser: null
};

export default function authReducer(state = nullSate, action) {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TRANSACTION:
      return nextState[action.transaction.id] = action.transaction;
    case RECEIVE_TRANSACTIONS:
      action.transactions.forEach(transaction => {
        nextState[transaction.id] = transaction;
      });
      return nextState;
    case REMOVE_TRANSACTION:
      return nullSate;
    default:
      return state;
  }
}