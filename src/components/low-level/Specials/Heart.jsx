import "./Heart.css";
import React from "react";

function Heart({ className, i_className, icon }) {
  return (
    <div className={className ? `il-heart ${i_className}` : "il-heart"}>
      {icon ? (
        icon
      ) : (
        <i
          className={
            i_className
              ? `fa-solid fa-heart ${i_className}`
              : "fa-solid fa-heart"
          }
        ></i>
      )}
    </div>
  );
}

export default Heart;
