import { connect } from "react-redux";
import { countUp, countDown } from "../actions";

const CounterWithRedux = ({ count, countUp, countDown }) => {
  return (
    <>
      <h1> React redux </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button onClick={countDown}>-</button>
        <h1>{count}</h1>
        <button onClick={countUp}>+</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch) => ({
  countUp: () => dispatch(countUp()),
  countDown: () => dispatch(countDown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithRedux);
