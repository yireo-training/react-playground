import { createStore } from "redux";

const incrementReducer = function (state, action) {
  return action.type === "INC" ? state + action.payload : state;
};

const store = createStore(incrementReducer, 0);
export default store;
