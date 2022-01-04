import { combineReducers } from "redux";
import requestsTabReducer from "./requests_tabs_reducer";

export default combineReducers({
  requests: requestsTabReducer,
});