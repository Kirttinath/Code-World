import React from "react";
import "./ModalPage.css";
function ModalPage({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            ❌
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>This is the Modal Design using custom Hook</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="cancelBtn"
          >
            Cancel
          </button>
          <button className="contBtn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default ModalPage;
