import react,{ useState } from 'react'



/* function App() {
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
} */

function App1()
{

  const [curr,newcurr]= useState("show");

  return(
    <>
    <div>
    <button onClick={() => newcurr("Likes")}>Like</button>
    <button onClick={() => newcurr("Comments")}>Comment</button>
    <button onClick={() => newcurr("Shares")}>Share</button>
    </div>
    <h1>{curr}</h1>
    </>
  )
}

export default App1
