import "./ImgTXT.css";
import React from "react";

function ImgTXT({ className, i_className, t_className, src, alt, text }) {
  return (
    <div className={className ? `il-imgTXT ${className}` : "il-imgTXT"}>
      <img
        className={i_className ? `il-img ${i_className}` : "il-img"}
        src={src}
        alt={alt}
      />
      <span className={t_className ? `il-text ${t_className}` : "il-text"}>
        {text}
      </span>
    </div>
  );
}

export default ImgTXT;
