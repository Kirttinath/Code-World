import "./App.css";
import useCounter from "./useCounter";

function App() {
  const [count, increaseCount, decreaseCount] = useCounter();
  return (
    <div className="App">
      <p>{count}</p>
      <br />
      <button onClick={increaseCount}>increaseCount</button>
      <span> </span>
      <button onClick={decreaseCount}>decreaseCount</button>
    </div>
  );
}

export default App;
