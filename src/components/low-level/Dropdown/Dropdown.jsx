import React, { useState } from "react";
import { MenuItems } from "../Data/MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown({ children, className, to, onClick }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 1075) {
      setDropdown(false);
    } else {
      setDropdown(true);
      //   setClick(false);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1075) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <Link
        className={className}
        to={to}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
        <i className="fas fa-caret-down mx-2" />
        <ul
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {dropdown &&
            MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.cName}
                    to={item.path}
                    onClick={() => setClick(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </Link>
    </>
  );
}

export default Dropdown;
