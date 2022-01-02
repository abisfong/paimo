import { 
  RECEIVE_TRANSACTION_CATEGORY,
  REMOVE_TRANSACTION_TYPE
} from "../../actions/transaction_actions";

export default function transactionCategoryReducer(state = null, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION_CATEGORY:
      return action.category;
    case REMOVE_TRANSACTION_TYPE:
      return null;
    default:
      return state;
  }
}