import { combineReducers } from "redux";

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case "COUNT_UP":
      return count + 1;
    case "COUNT_DOWN":
      return count - 1;
    default:
      return count;
  }
};

export default combineReducers({
  count: countReducer,
});
