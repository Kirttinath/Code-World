import React from 'react'
import useCounter from '../useCounter';

function Counter1() {
    const [count, increaseCount, decreaseCount] = useCounter(10);
  return (
    <div>
       <p>{count}</p>
      <br />
      <button onClick={increaseCount}>increaseCount</button>
      <span> </span>
      <button onClick={decreaseCount}>decreaseCount</button>
    </div>
  )
}

export default Counter1
