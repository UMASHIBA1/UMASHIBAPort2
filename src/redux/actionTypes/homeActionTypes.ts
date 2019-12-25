import { FocusedAreaTypes } from "../../typing/redux/home/homeState";
import { CHANGE_FOCUSED_AREA } from "../constants/homeTypes";

export interface ChangeFocusedAreaAction {
  type: typeof CHANGE_FOCUSED_AREA;
  payload: FocusedAreaTypes;
}

type homeActionTypes = ChangeFocusedAreaAction;

export default homeActionTypes;
