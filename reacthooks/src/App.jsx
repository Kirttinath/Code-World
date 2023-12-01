import react,{ useEffect,useMemo, useState } from 'react'

//useMemo Hook : 
function App(){

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber= slowFunction(number)
  const themeStyle ={
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white':'black'
  }
  return(
    <>
    <input type='number' value={number} onChange={e => setNumber(
      parseInt(e.target.value))}/><br/>
    <button onClick={() => setDark(preDark => !preDark)}>Change</button><br/>
    <div style={themeStyle}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num){
  for(let i=0;i<=1000000000; i++){}
  return num *2
}
export default App
/* ________________
//UseState Hook: 
function App1()
{

  const [curr,newcurr]= useState("show")
  const [items, setitems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${curr}`)
    .then(response => response.json())
    .then(json => setitems(json))
  }, [curr])

  return(
    <>
    <div>
    <button onClick={() => newcurr("Likes")}>Like</button>
    <button onClick={() => newcurr("Comments")}>Comment</button>
    <button onClick={() => newcurr("Shares")}>Share</button>
    </div>
    <h1>{curr}</h1>
    {items.map(item => {
      return <pre>{JSON.stringify(item)}</pre>}
    )}
    </>
  )
} */


/* 
//useEffect Hook : 
___________
function App2() {
  const [width, setWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () =>
            window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
    <div>{width}</div>
    </>
  )
} */

