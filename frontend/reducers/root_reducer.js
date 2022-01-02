import { combineReducers } from "redux";
import entitiesReducer from './entities';
import errorsReducer from './errors_reducer';
import authReducer from "./auth_reducer";
import searchReducer from "./search_reducers";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  auth: authReducer,
  search: searchReducer,
});

export default rootReducer;