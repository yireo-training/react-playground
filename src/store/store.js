import { createStore } from "redux";
import reducers from "./reducers";
import intialState from "./initialState";

const store = createStore(
  reducers,
  intialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
