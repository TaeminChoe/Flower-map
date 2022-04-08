import "./App.css";
import CounterWithDucks from "./components/CounterWithDucks";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CounterWithDucks />
    </div>
  );
}

export default App;
