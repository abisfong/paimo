import { combineReducers } from "redux";
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import authReducer from "./auth_reducer";
import searchReducer from "./search_reducers";
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  auth: authReducer,
  search: searchReducer,
  ui: uiReducer
});

export default rootReducer;