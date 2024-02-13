import React from 'react'
import useCounter from '../useCounter';

const Counter2 = () => {
    const [count, increaseCount, decreaseCount] = useCounter();
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

export default Counter2
