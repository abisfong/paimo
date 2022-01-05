import { 
  RECEIVE_ACTIVITY_TAB_SELECTION
} from "../../../actions/tab_actions";

export default function activityTabReducer(state=0, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVITY_TAB_SELECTION:
      return action.tabNumber;
    default:
      return state;
  }
}