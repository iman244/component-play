import "./LayoutButton.css";
import React from "react";

function LayoutButton({ children, className }) {
  return (
    <button
      className={className ? `il-LayoutButton ${className}` : "il-LayoutButton"}
    >
      {children}
    </button>
  );
}

export default LayoutButton;
