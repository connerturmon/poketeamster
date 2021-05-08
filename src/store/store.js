import { createStore } from "@reduxjs/toolkit"
import evTrackerReducer from "../reducers/evTrackerReducer";

const store = createStore(
  evTrackerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;