import { 
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../../actions/session_actions";

const sessionErrorsReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case LOGOUT_CURRENT_USER:
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;