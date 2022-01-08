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
  let transactions, transaction;
  
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
      transactions = orderTransactionsByDate(
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
      transaction = nextState.find(t => 
        t.id === action.id
      )
      transaction.liked = true;
      transaction.likeCount++;
      return nextState;
    case REMOVE_TRANSACTION_LIKE:
      transaction = nextState.find(t => 
        t.id === action.id
      )
      transaction.liked = false;
      transaction.likeCount--;
      return nextState;
    default:
      return state;
  }
}