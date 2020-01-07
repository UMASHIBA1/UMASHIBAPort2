import { FocusedAreaTypes, HomeState } from "../../typing/redux/home/homeState";
import {
  CHANGE_FOCUSED_AREA,
  CHANGE_HOME_FIRST_ARRIVED
} from "../constants/homeTypes";

export interface ChangeFocusedAreaAction {
  type: typeof CHANGE_FOCUSED_AREA;
  payload: FocusedAreaTypes;
}

export interface ChangeHomeFirstArrivedAction {
  type: typeof CHANGE_HOME_FIRST_ARRIVED;
  payload: HomeState["homeFirstArrived"];
}

type homeActionTypes = ChangeFocusedAreaAction | ChangeHomeFirstArrivedAction;

export default homeActionTypes;
