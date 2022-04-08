import { connect } from "react-redux";
import { countUp, countDown } from "../store/module/counter";

const CounterWithDucks = ({ counter, countUp, countDown }) => {
  return (
    <>
      <h1> React redux ducks </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button onClick={countDown}>-</button>
        <h1>{counter}</h1>
        <button onClick={countUp}>+</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => ({
  countUp: () => dispatch(countUp()),
  countDown: () => dispatch(countDown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithDucks);
