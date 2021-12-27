import { 
  RECEIVE_SEARCH_SELECTION,
  REMOVE_SEARCH_SELECTION
} from "../../actions/search_actions";

export default function searchSelectionReducer(state = null, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_SELECTION:
      return action.user
    case REMOVE_SEARCH_SELECTION:
      return null;
    default:
      return state;
  }
}