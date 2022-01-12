import { 
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER
} from "../actions/auth_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const nullSate = {
  currentUser: null
};

export default function authReducer(state = nullSate, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user }
    case REMOVE_CURRENT_USER:
      return nullSate;
    default:
      return state;
  }
}