import { 
  RECEIVE_SEARCH_SELECTION,
  REMOVE_SEARCH_SELECTION,
  REMOVE_SEARCH_SELECTIONS
} from "../../actions/search_actions";

export default function searchSelectionReducer(state = new Map(), action) {
  Object.freeze(state);
  const nextState = new Map(state);
  switch (action.type) {
    case RECEIVE_SEARCH_SELECTION:
      const user = action.user
      nextState.set(user.id, user);
      return nextState;
    case REMOVE_SEARCH_SELECTION:
      nextState.delete(action.id);
      return nextState;
    case REMOVE_SEARCH_SELECTIONS:
      return new Map();
    default:
      return state;
  }
}