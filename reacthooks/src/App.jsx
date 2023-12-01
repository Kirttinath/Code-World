import react,{ useState } from 'react'



function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme]  = useState("Blue");

function decrease()
{
  setCount(prevcount => prevcount-1);//This is the right way to update setcount value by function
}
function increase()
{
  setCount(prevcount => prevcount+1);
  setTheme("red");
}
  return (
    <>
    <button onClick={decrease}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={increase}>+</button>
    </>
  )
}

export default App
