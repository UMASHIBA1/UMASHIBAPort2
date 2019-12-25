import { FocusedAreaTypes, HomeState } from "../../typing/home/homeState";

export const changeFocusedArea = (
  focusedArea: FocusedAreaTypes,
  state: HomeState
) => {
  return { ...state, ...{ focusedArea } };
};
