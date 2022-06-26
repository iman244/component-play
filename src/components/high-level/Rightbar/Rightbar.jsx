import "./Rightbar.css";
import React from "react";
import ImgTXT from "../../low-level/ImgTXT/ImgTXT";
import List from "../../mid-level/List/List";
import { Data_ContactList } from "../../Data/SidebarData";
import { onlineFriends } from "../../Data/RightbarData";

function Rightbar({ className }) {
  return (
    <div className={`il-rightBar ${className}`}>
      <div className="il-rightBarWrapper">
        <ImgTXT
          src="/assets/gift.png"
          alt="gift"
          text={
            <>
              <b>pooyan</b> and <b>siroos</b> have a birthdate today!
            </>
          }
        />
        <img className="rounded-md" src="/assets/ad.png" alt="ad" />
        <div className="onlineFriends">
          <h2>online friends</h2>
          <List
            component="ProfileTXT"
            data={onlineFriends}
            i_className="h-8 w-8"
            badge={true}
            s_className="rightBarbadge"
          />
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
