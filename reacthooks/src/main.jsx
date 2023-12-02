import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cls from './cls.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <User/>
    <Cls/>
    <User/>
    <User/>
  </React.StrictMode>
)

function User() {
  return (
    <>
    <h1>Hello world</h1>
    </>
  )
}
