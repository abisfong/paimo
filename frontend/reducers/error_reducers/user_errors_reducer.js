import { 
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_USER_ERRORS 
} from "../../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const userErrorsReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USERS:
    case RECEIVE_USER:
      return [];
    case RECEIVE_USER_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
}

export default userErrorsReducer;