import { 
  RECEIVE_SEARCH_RESULTS
} from "../../actions/search_actions";

export default function searchResultsReducer(state = [], action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.users
    default:
      return state;
  }
}