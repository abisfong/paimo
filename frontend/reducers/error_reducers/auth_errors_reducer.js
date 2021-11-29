import { 
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER,
  RECEIVE_AUTH_ERRORS
} from "../../actions/auth_actions";
import { REMOVE_ERROR } from "../../actions/error_actions";

const authErrorsReducer = data => {
  return (state=[], action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
      case REMOVE_CURRENT_USER:
      case RECEIVE_CURRENT_USER:
        return {};
      case RECEIVE_AUTH_ERRORS:
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

export default authErrorsReducer;