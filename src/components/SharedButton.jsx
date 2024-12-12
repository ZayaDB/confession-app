import React from "react";
import "../styles/Button.css";

const SharedButton = ({ text, onClick, onMouseOver, isNoClicked }) => {
  return (
    <button
      className={`shared-button ${
        text === "NO" && isNoClicked ? "no-move" : ""
      }`}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {text}
    </button>
  );
};

export default SharedButton;
