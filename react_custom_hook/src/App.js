import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <p>{count}</p>
      <br />
      <br />
      <button onClick={increaseCount}>increaseCount</button>
      <br />
      <button onClick={decreaseCount}>decreaseCount</button>
    </div>
  );
}

export default App;
