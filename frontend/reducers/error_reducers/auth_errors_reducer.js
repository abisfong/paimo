import { 
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER,
  RECEIVE_AUTH_ERRORS
} from "../../actions/auth_actions";

const authErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case REMOVE_CURRENT_USER:
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_AUTH_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
}

export default authErrorsReducer;