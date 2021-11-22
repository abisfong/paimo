import { 
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from "../../actions/session_actions";

const sessionErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case LOGOUT_CURRENT_USER:
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
}

export default sessionErrorsReducer;