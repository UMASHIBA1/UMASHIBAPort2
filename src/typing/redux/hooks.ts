import { TypedUseSelectorHook, useSelector } from "react-redux";
import ReduxStateType from "./reduxState";

export const useTypedSelector: TypedUseSelectorHook<ReduxStateType> = useSelector;
