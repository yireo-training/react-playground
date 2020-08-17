import {combineReducers} from "redux";
import actionTypes from "./actionTypes";

const incrementReducerByAction = function(incrementState, action) {
  return incrementState + action.payload;
}

const incrementReducer = function (incrementState, action) {
  if (incrementState === null || incrementState === undefined) {
    return 0;
  }

  if (action.type !== actionTypes.INC) {
    return incrementState;
  }

  return incrementReducerByAction(incrementState, action);
};

const customReducer = state => {
  if(!state) {
    return {};
  }

  return state;
}

export default combineReducers({increment: incrementReducer, custom: customReducer});
