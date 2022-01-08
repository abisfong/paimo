import { 
  RECEIVE_TRANSACTION_LIKE, 
  REMOVE_TRANSACTION_LIKE 
} from "../../actions/like_actions";
import { 
  RECEIVE_TRANSACTION,
  RECEIVE_TRANSACTIONS,
  REMOVE_TRANSACTION
} from "../../actions/transaction_actions";
import orderTransactionsByDate from "../../utils/components/transaction/order_transactions_by_date";

export default function transactionsReducer(state = [], action) {
  Object.freeze(state);
  const nextState = state.slice();

  switch (action.type) {
    case RECEIVE_TRANSACTION:
      return nextState.map(transaction => {
        if (transaction.id === action.transaction.id)
          return action.transaction
        return transaction
      });
    case RECEIVE_TRANSACTIONS:
      const transactions = orderTransactionsByDate(
        Object.values(action.transactions)
      );

      if (!action.insert) return transactions;

      transactions.forEach(transaction => {
        nextState.push(transaction);
      });

      return nextState;
    case REMOVE_TRANSACTION:
      return nextState.filter(transaction => transaction.id !== action.id);
    case RECEIVE_TRANSACTION_LIKE:
      const transaction = nextState.find(transaction => 
        transaction.id === action.id
      )
      transaction.liked = true;
      transaction.likes++;
      return nextState;
    case REMOVE_TRANSACTION_LIKE:
      const transaction = nextState.find(transaction => 
        transaction.id === action.id
      )
      transaction.liked = false;
      transaction.likes--;
      return nextState;
    default:
      return state;
  }
}