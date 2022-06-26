import "./IconList.css";
import React from "react";

function IconList({ className, i_className, data }) {
  return (
    <ul className={className ? `il-iconList ${className}` : "il-iconList"}>
      {data ? (
        data.map((item) => (
          <li
            className={i_className ? `il-icon ${i_className}` : "il-icon"}
            key={item.id}
          >
            {item.icon}
          </li>
        ))
      ) : (
        <p>no data ...</p>
      )}
    </ul>
  );
}

export default IconList;
