import { 
  RECEIVE_SEARCH_SELECTION
} from "../../actions/search_actions";

export default function searchResultsReducer(state = null, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_SELECTION:
      return action.user
    default:
      return state;
  }
}