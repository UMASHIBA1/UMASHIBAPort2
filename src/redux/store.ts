import { createStore } from "redux";
import rootReducer from "./reducers";

const reduxStore = createStore(
  rootReducer,
  process.env.NODE_ENV !== "production" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

export default reduxStore;

export type DispatchType = typeof reduxStore.dispatch;
