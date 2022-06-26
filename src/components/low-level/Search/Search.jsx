import React from "react";

import "./Search.css";

function Search({
  className,
  icon_className,
  input_className,
  iconEnd,
  placeholder,
}) {
  return (
    <div className={className ? `il-search ${className}` : "il-search"}>
      {!iconEnd && (
        <i
          className={
            icon_className
              ? `fa-solid fa-magnifying-glass ${icon_className}`
              : "fa-solid fa-magnifying-glass"
          }
        ></i>
      )}
      <input
        className={input_className ? `il-input ${input_className}` : "il-input"}
        placeholder={placeholder}
      />
      {iconEnd && (
        <i
          className={
            icon_className
              ? `fa-solid fa-magnifying-glass ${icon_className}`
              : "fa-solid fa-magnifying-glass"
          }
        ></i>
      )}
    </div>
  );
}

export default Search;
