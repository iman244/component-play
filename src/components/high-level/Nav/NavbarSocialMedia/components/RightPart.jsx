import React from "react";
import { icons } from "../../../../Data/NavData";
import Icon from "../../../../low-level/Icon/Icon";
import ProfileImg from "../../../../low-level/Profile/ProfileImg";

function RightPart() {
  return (
    <div className="right-part">
      <div className="links">
        <span>Homepage</span>
        <span>Timeline</span>
      </div>
      <div className="icons">
        {icons.map((item) => (
          <Icon className="icon" icon={item.icon} badge={item.badge} />
        ))}
      </div>
      <ProfileImg
        i_className="h-8 w-8"
        src="/assets/person/1.jpeg"
        alt="profile"
      />
    </div>
  );
}

export default RightPart;
