import {combineReducers} from "redux";

const incrementReducer = function (incrementState, action) {
  if (incrementState === null || incrementState === undefined) {
    return 0;
  }

  if (action.type !== "INC") {
    return incrementState;
  }

  return incrementState + action.payload;
};

const customReducer = (state,action ) => {
  if(!state) {
    return {};
  }

  return state;
}

export default combineReducers({increment: incrementReducer, custom: customReducer});
