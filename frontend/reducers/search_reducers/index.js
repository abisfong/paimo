import { combineReducers } from "redux";
import searchResultsReducer from "./search_results_reducer";

export default combineReducers({
  results: searchResultsReducer
});