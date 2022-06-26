import React from "react";
import "./Button2.css";

const options_style = ["secondary"];
const options_size = ["large"];

function Button2({ children, style, size }) {
  let btnStyle = options_style.includes(style) ? style : "";
  let btnSize = options_size.includes(size) ? size : "";
  return <button className={`${btnStyle} ${btnSize}`}>{children}</button>;
}

export default Button2;
