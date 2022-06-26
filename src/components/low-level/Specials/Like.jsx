import "./Like.css";
import React from "react";

function Like({ className, i_className, n_className, icon, nLike }) {
  return (
    <div className={className ? `il-like ${className}` : "il-like"}>
      {icon ? (
        icon
      ) : (
        <i
          className={
            i_className
              ? `fa-solid fa-thumbs-up ${i_className}`
              : "fa-solid fa-thumbs-up"
          }
        ></i>
      )}
      <span>4 likes</span>
    </div>
  );
}

export default Like;
