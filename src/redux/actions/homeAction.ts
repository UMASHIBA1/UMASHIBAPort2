import { FocusedAreaTypes, HomeState } from "../../typing/redux/home/homeState";

export const changeFocusedArea = (
  focusedArea: FocusedAreaTypes,
  state: HomeState
) => {
  return { ...state, ...{ focusedArea } };
};
