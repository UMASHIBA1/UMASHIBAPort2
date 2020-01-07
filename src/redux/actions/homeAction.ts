import { FocusedAreaTypes, HomeState } from "../../typing/redux/home/homeState";

export const changeFocusedArea = (
  focusedArea: FocusedAreaTypes,
  state: HomeState
) => {
  return { ...state, ...{ focusedArea } };
};

export const changeHomeFirstArrived = (
  homeFirstArrived: boolean,
  state: HomeState
) => {
  return { ...state, ...{ homeFirstArrived } };
};
