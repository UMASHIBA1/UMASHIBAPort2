import { HomeState } from "../../typing/redux/home/homeState";
import {
  changeFocusedArea,
  changeHomeFirstArrived
} from "../actions/homeAction";
import homeActionTypes from "../actionTypes/homeActionTypes";
import {
  CHANGE_FOCUSED_AREA,
  CHANGE_HOME_FIRST_ARRIVED
} from "../constants/homeTypes";
import homeState from "../firstState/homeState";

const homeStateStore = (
  state: HomeState = homeState,
  action: homeActionTypes
) => {
  switch (action.type) {
    case CHANGE_FOCUSED_AREA:
      return changeFocusedArea(action.payload, state);
    case CHANGE_HOME_FIRST_ARRIVED:
      return changeHomeFirstArrived(action.payload, state);
    default:
      return state;
  }
};

export default homeStateStore;
