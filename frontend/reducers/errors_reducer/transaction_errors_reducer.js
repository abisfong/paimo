import { 
  RECEIVE_TRANSACTION, 
  RECEIVE_TRANSACTIONS,
  RECEIVE_TRANSACTION_ERRORS
} from "../../actions/transaction_actions";
import { RECEIVE_USER } from "../../actions/user_actions";
import { REMOVE_ERROR } from "../../actions/error_actions";

const transactionErrorsReducer = data => {  
  return (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TRANSACTION:
      case RECEIVE_TRANSACTIONS:
      case RECEIVE_USER:
        return {};
      case RECEIVE_TRANSACTION_ERRORS:
        const errors = action.errors.responseJSON;
        errors.forEach(error => { nextState[data.errorCount+=1] = error; });
        return nextState;
      case REMOVE_ERROR:
        if (nextState[action.id]) delete nextState[action.id]
        return nextState;
      default:
        return state;
    }
  }
}

export default transactionErrorsReducer;