import { combineReducers } from "redux";
import requestsTabReducer from "./requests_tabs_reducer";
import activityTabReducer from "./activity_tabs_reducer";
import userActivityTabReducer from "./user_activity_tabs_reducer";

export default combineReducers({
  requests: requestsTabReducer,
  activity: activityTabReducer,
  userActivity: userActivityTabReducer
});