import react,{ useEffect, useState } from 'react'



 function App() {
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
}



/* 
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

export default App
