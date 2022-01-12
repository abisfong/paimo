import { 
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER
} from "../actions/auth_actions";
import { 
  RECEIVE_TRANSACTION, 
  RECEIVE_TRANSACTIONS 
} from "../actions/transaction_actions";

const nullSate = {
  currentUser: null
};

export default function authReducer(state = nullSate, action) {
  Object.freeze(state);
  const nextState = Object.assign(state, {})
  const currentUser = state.currentUser;
  console.log(action);
  switch (action.type) {
    case RECEIVE_TRANSACTION:
    case RECEIVE_TRANSACTIONS:
      const users = Object.values(action.users)
      for (const user of users)
        if (user.id === currentUser.id)
          return { currentUser: user };
      return nextState;
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user }
    case REMOVE_CURRENT_USER:
      return nullSate;
    default:
      return state;
  }
}