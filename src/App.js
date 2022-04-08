import "./App.css";
import CounterWithRedux from "./components/CounterWithRedux";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CounterWithRedux />
    </div>
  );
}

export default App;
