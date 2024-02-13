import { useState } from "react";
import "./App.css";
import Counter1 from "./Component/Counter1";
import Counter2 from "./Component/Counter2";
import ModalPage from "./Component/ModalPage";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      {/* <Counter1 />
      <Counter2 /> */}
      <h1>Click to open the Modal :</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
      {modalOpen && <ModalPage setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
