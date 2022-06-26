import "./ButtonSimple.css";
import React from "react";

function ButtonSimple({ children, className }) {
  return (
    <button className={className ? `il-btn ${className}` : `il-btn`}>
      {children}
    </button>
  );
}

export default ButtonSimple;

// storage

/*
bg-${color}-${shade} hover:bg-${color}-${shade + 200}
bg-${color}-${shade} hover:bg-${color}-${shade + 200}
*/
