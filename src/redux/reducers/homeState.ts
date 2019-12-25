import { HomeState } from "../../typing/home/homeState";
import { changeFocusedArea } from "../actions/homeAction";
import homeActionTypes from "../actionTypes/homeActionTypes";
import { CHANGE_FOCUSED_AREA } from "../constants/homeTypes";
import homeState from "../firstState/homeState";

const homeStateStore = (
  state: HomeState = homeState,
  action: homeActionTypes
) => {
  switch (action.type) {
    case CHANGE_FOCUSED_AREA:
      return changeFocusedArea(action.payload, state);
    default:
      return state;
  }
};

export default homeStateStore;
