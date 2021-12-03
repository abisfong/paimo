import { combineReducers } from "redux";
import searchResultsReducer from "./search_results_reducer";
import searchSelectionReducer from "./search_selection_reducer";

export default combineReducers({
  results: searchResultsReducer,
  selection: searchSelectionReducer
});