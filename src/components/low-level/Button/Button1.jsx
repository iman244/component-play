import "./Button1.css";
import React from "react";
import { Link } from "react-router-dom";

const options_style = ["primary", "outline"];
const options_size = ["medium", "large"];

function Button({ children, onClick, to, style, size }) {
  let btnStyle = options_style.includes(style) ? style : options_style[0];
  let btnSize = options_size.includes(size) ? size : options_size[0];
  return (
    <Link to={to}>
      <button className={`btn ${btnStyle} ${btnSize}`} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
}

export default Button;
