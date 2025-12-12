import React from "react";
import "./ModalBox.css";

const ModalBox = ({ title = "", text = "", onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2 className="modal-title">{title}</h2>

        <div className="modal-content">
          {typeof text === "string"
            ? text.split("\n").map((line, index) => <p key={index}>{line}</p>)
            : text /* if it's React element like <ul> */}
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
