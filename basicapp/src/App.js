import Button, {fancyButton} from "./Components/Button/Button";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Button>Styled Component</Button>
      <div>
        <br />
      </div>
      <Button variant="outline">Styled Component</Button>
      <div>
        <br />
      </div>
       <fancyButton>fancy Button</fancyButton>
    </div>
  );
}

export default App;
