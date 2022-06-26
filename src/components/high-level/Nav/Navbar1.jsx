import "./Navbar.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../low-level/Button/Button";

function Navbar() {
  const [LargeView, setLargeView] = useState(true);
  const handleView = () => {
    if (window.innerWidth <= 1075) {
      setLargeView(false);
    } else {
      setLargeView(true);
    }
  };
  window.addEventListener("resize", handleView);

  const [MobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const handleMobileNav = () => setMobileNavIsOpen(!MobileNavIsOpen);
  const closeMobileNav = () => setMobileNavIsOpen(false);

  const navList = [
    { textNode: "Home", to: "/" },
    { textNode: "Services", to: "/services" },
    { textNode: "Products", to: "/products" },
    { textNode: "Sign Up1", to: "/signUp" },
  ];

  useEffect(() => {
    handleView();
  }, []);

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Component Play <i className="fa-solid fa-hammer"></i>
        </Link>
        <div className="menu-icon" onClick={handleMobileNav}>
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
        </ul>
        {LargeView && (
          <Button to="/signUp" style={"outline"}>
            Sign Up2
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
