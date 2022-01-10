import { 
  RECEIVE_TRANSACTION_LIKE, 
  REMOVE_TRANSACTION_LIKE 
} from "../../actions/like_actions";
import { 
  RECEIVE_TRANSACTION,
  RECEIVE_TRANSACTIONS,
  REMOVE_TRANSACTION
} from "../../actions/transaction_actions";
import {
  RECEIVE_TRANSACTION_COMMENT, 
  REMOVE_TRANSACTION_COMMENT
} from "../../actions/comment_actions"
import orderTransactionsByDate from "../../utils/components/transaction/order_transactions_by_date";

export default function transactionsReducer(state = [], action) {
  let transactions, transaction, comment;
  
  Object.freeze(state);
  const nextState = state.slice();

  switch (action.type) {
    case RECEIVE_TRANSACTION:
      if (nextState.length === 0) {
        nextState.push(action.transaction)
        return nextState;
      }

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
      transaction = nextState.find(transaction => 
        transaction.id === action.id
      )
      transaction.liked = true;
      transaction.like_count++;
      return nextState;
    case REMOVE_TRANSACTION_LIKE:
      transaction = nextState.find(transaction => 
        transaction.id === action.id
      )
      transaction.liked = false;
      transaction.like_count--;
      return nextState;
    case RECEIVE_TRANSACTION_COMMENT:
      comment = action.comment;
      transaction = nextState.find(transaction => 
        transaction.id === comment.transaction_id
      )
      transaction.comments.push(comment);
      transaction.commented = true;
      return nextState;
    case REMOVE_TRANSACTION_COMMENT:
      const commented = false;
      transaction = nextState.find(transaction => 
        transaction.id === action.transactionId
      )
      transaction.comments = transaction.comments.filter(transactionComment => 
        transactionComment.id !== action.commentId
      )
      transaction.comments.forEach(transactionComment => {
        if (transactionComment.user_id === action.currentUserId)
          commented = true;
      })
      transaction.commented = commented;
      return nextState;
    default:
      return state;
  }
}