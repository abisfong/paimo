import { 
  RECEIVE_TAB_SELECTION
} from "../../../actions/search_actions";

export default function searchResultsReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAB_SELECTION:
      return action.users
    case REMOVE_SEARCH_RESULTS:
      return {};
    default:
      return state;
  }
}