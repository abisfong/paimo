import { 
  RECEIVE_USER,
  RECEIVE_USERS, 
  REMOVE_USER
} from '../../actions/user_actions';
import { RECEIVE_SEARCH_RESULTS } from '../../actions/search_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/auth_actions';
import { RECEIVE_TRANSACTION, RECEIVE_TRANSACTIONS } from '../../actions/transaction_actions';

export default function usersReducer(state={}, action) {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      const user = action.user
      newState[user.id] = user;
      return newState;
    case RECEIVE_TRANSACTION:
    case RECEIVE_TRANSACTIONS:
    case RECEIVE_SEARCH_RESULTS:
    case RECEIVE_USERS:
      const users = Object.values(action.users);
      users.forEach( user => {
        newState[user.id] = user;
      })
      return newState;
    case REMOVE_USER:
      delete newState[action.user.id];
      return newState;
    default:
      return state;
  }
}

