import { combineReducers } from "redux";
import entitiesReducer from './entities';
import errorsReducer from './error_reducers';
import sessionReducer from "./session_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer
});

export default rootReducer;