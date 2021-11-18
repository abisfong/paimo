import { RECEIVE_USER_ERRORS } from "../../actions/user_actions";

const userErrorsReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
}

export default userErrorsReducer;