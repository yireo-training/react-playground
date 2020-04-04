const incrementReducer = function (state, action) {
  return action.type === "INC" ? state + action.payload : state;
};

export default incrementReducer;
