import { combineReducers } from "redux";
import homeStateStore from "./homeState";

const rootReducer = combineReducers({
  homeState: homeStateStore
});

export default rootReducer;
