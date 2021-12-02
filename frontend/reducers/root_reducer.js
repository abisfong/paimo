import { combineReducers } from "redux";
import entitiesReducer from './entities';
import errorsReducer from './error_reducers';
import authReducer from "./auth_reducer";
import searchReducer from "./search_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  auth: authReducer,
  search: searchReducer
});

export default rootReducer;