import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button>-</button>
    <span>0</span>
    <button>+</button>
    </>
  )
}

export default App
