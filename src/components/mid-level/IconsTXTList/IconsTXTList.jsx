import "./IconsTXTList.css";
import React from "react";
import IconText from "../../low-level/Icon/IconText";

function IconsTXTList({ className, iT_className, t_className, data }) {
  return (
    <ul
      className={className ? `il-iconsTXTList ${className}` : "il-iconsTXTList"}
    >
      {data.map((item) => (
        <li key={item.text}>
          <IconText
            className={iT_className ? iT_className : null}
            t_className={t_className ? t_className : null}
            icon={item.icon}
            text={item.icon ? item.text : null}
          />
        </li>
      ))}
    </ul>
  );
}

export default IconsTXTList;
