import "./Topbar.css";
import React from "react";
import ProfileTXT from "../../low-level/Profile/ProfileTXT";

function Topbar({ className, UserImgSrc, UserImgTXT }) {
  return (
    <div className={className ? `il-topBar ${className}` : "il-topBar"}>
      <div className="il-topBarLeft">
        <ProfileTXT
          i_className="h-10 w-10"
          t_className="text-sm font-semibold capitalize"
          src={UserImgSrc}
          text={UserImgTXT}
        />
        <span className="il-postedTime">5 min ago</span>
      </div>
      <div className="il-topBarRight">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  );
}

export default Topbar;
