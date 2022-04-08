// Actions
const COUNT_UP = "counter/COUNT_UP";
const COUNT_DOWN = "counter/COUNT_DOWN";

const initState = 0;

// Reducers
const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case COUNT_UP:
      return state + 1;
    case COUNT_DOWN:
      return state - 1;
    default:
      return state;
  }
};

// Action 생성자
export const countUp = () => {
  return {
    type: COUNT_UP,
  };
};

export const countDown = () => {
  return {
    type: COUNT_DOWN,
  };
};

export default reducer;
