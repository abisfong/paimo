import { combineReducers } from "redux";
import tabsReducer from './tabs';

export default combineReducers({
  tabs: tabsReducer,
});