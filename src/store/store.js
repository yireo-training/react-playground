import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers, 0);
export default store;
