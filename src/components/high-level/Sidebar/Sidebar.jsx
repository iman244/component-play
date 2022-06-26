import "./Sidebar.css";
import React from "react";
import { Data_ContactList, Sidebar_icons } from "../../Data/SidebarData";
import IconsTXTList from "../../mid-level/IconsTXTList/IconsTXTList";
import LayoutButton from "../../low-level/Button/LayoutButton";
import List from "../../mid-level/List/List";

function Sidebar({ className }) {
  return (
    <div className={`il-sidebar ${className}`}>
      <div className="il-sidebarWrapper">
        <IconsTXTList className="mb-2" data={Sidebar_icons} />
        <LayoutButton className="center">Show More</LayoutButton>
        <hr />
        <List
          component="ProfileTXT"
          data={Data_ContactList}
          i_className="h-8 w-8"
        />
      </div>
    </div>
  );
}

export default Sidebar;
