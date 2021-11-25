import { combineReducers } from "redux";
import entitiesReducer from './entities';
import errorsReducer from './error_reducers';
import authReducer from "./auth_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  auth: authReducer
});

export default rootReducer;