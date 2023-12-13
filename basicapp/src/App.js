
import "./App.css";
import styled from "styled-components";

const Button = styled.button`
  border: 2px solid #4caf50;
  background-color: #4caf50;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  `

function App() {
  return (
    <div className='App'>
      {/* <button>Button</button> */}
      <Button>Styled Component</Button>
    </div>
  )
}

export default App
