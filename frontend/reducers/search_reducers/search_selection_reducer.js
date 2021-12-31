import { 
  RECEIVE_SEARCH_SELECTION,
  REMOVE_SEARCH_SELECTION
} from "../../actions/search_actions";

export default function searchSelectionReducer(state = {}, action) {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SEARCH_SELECTION:
      const user = action.user
      nextState[user.id] = user;
      return nextState;
    case REMOVE_SEARCH_SELECTION:
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
}