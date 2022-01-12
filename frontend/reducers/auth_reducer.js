import { 
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER
} from "../actions/auth_actions";
import { RECEIVE_TRANSACTIONS } from "../actions/transaction_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const nullSate = {
  currentUser: null
};

export default function authReducer(state = nullSate, action) {
  Object.freeze(state);
  const currentUser = state.currentUser;
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      for (let i = 0; i < action.users.length; i++)
        if (action.users[i].id === currentUser.id)
          return action.users[i];
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user }
    case REMOVE_CURRENT_USER:
      return nullSate;
    default:
      return state;
  }
}