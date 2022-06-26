import "./IconText.css";
import React from "react";

function IconText({ className, t_className, icon, text }) {
  return (
    <div className={className ? `il-iconText ${className}` : "il-iconText"}>
      {icon}
      {text && <span className={t_className ? t_className : null}>{text}</span>}
    </div>
  );
}

export default IconText;
