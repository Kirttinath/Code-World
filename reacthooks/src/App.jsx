import react,{ useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

function decrease()
{
  setCount(prevcount => prevcount-1);//This is the right way to update setcount value by function
}
function increase()
{
  setCount(prevcount => prevcount+1);
}
  return (
    <>
    <button onClick={decrease}>-</button>
    <span>{count}</span>
    <button onClick={increase}>+</button>
    </>
  )
}

export default App
