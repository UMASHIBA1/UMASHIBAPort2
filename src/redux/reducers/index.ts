import { combineReducers } from "redux";
import homeStateStore from "./homeStateStore";
import skillsPageStore from "./skillsPageStore";

const rootReducer = combineReducers({
  homeState: homeStateStore,
  skillsPageState: skillsPageStore
});

export default rootReducer;
