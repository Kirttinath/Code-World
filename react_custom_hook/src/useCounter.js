import { useState } from "react";

const useCounter = (initialcount = 0) => {
  const [count, setCount] = useState(initialcount);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return [count, increaseCount, decreaseCount];
};

export default useCounter;
