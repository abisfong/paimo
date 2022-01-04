import { 
  RECEIVE_REQUESTS_TAB_SELECTION
} from "../../../actions/tab_actions";

export default function requestsTabReducer(state=0, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REQUESTS_TAB_SELECTION:
      return action.tabNumber;
    default:
      return state;
  }
}