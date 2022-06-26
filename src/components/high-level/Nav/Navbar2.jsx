import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button2 from "../../low-level/Button/Button2";
import Dropdown from "../../mid-level/Dropdown";
import "./Navbar2.css";

function Navbar2() {
  const [MobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const handleMobileNav = () => setMobileNavIsOpen(!MobileNavIsOpen);
  const closeMobileNav = () => setMobileNavIsOpen(false);

  const navList = [
    { textNode: "Home", to: "/" },
    { textNode: "Services", to: "/services" },
    { textNode: "Products", to: "/products" },
  ];

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Navbar2 <i className="fa-solid fa-hammer"></i>
        </Link>
        <div className="mobile-icon" onClick={handleMobileNav}>
          <i className={MobileNavIsOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={MobileNavIsOpen ? "nav-menu active" : "nav-menu"}>
          {navList.map((Listitem) => {
            return (
              <li className="nav-items">
                <Link
                  className="nav-links"
                  to={Listitem.to}
                  onClick={closeMobileNav}
                >
                  {Listitem.textNode}
                </Link>
              </li>
            );
          })}
          <li className="nav-items">
            <Dropdown to="/dropdown" className='nav-links' onClick={closeMobileNav}>
              Dropdown
            </Dropdown>
          </li>
          <li className="nav-items">
            <Button2>Sign Up1</Button2>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar2;
