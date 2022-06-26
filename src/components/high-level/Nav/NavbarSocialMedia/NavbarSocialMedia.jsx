import React from "react";
import LeftPart from "./components/LeftPart";
import MiddlePart from "./components/MiddlePart";
import RightPart from "./components/RightPart";

import "./Navbar_socialMedia_s.css";
import "./Navbar_socialMedia_b.css";

function NavbarSocialMedia() {
  return (
    <nav>
      <LeftPart />
      <MiddlePart />
      <RightPart />
    </nav>
  );
}

export default NavbarSocialMedia;
