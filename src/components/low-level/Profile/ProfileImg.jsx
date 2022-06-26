import "./ProfileImg.css";
import React from "react";

function ProfileImg({
  className,
  i_className,
  s_className,
  badge,
  src,
  alt,
  badgeData,
}) {
  return (
    <div className={className ? `il-profileImg ${className}` : "il-profileImg"}>
      <img
        className={i_className ? `il-img ${i_className}` : "il-img"}
        src={src}
        alt={alt}
      />
      {badge && (
        <span className={s_className ? `badge ${s_className}` : "badge"}>
          {badgeData}
        </span>
      )}
    </div>
  );
}

export default ProfileImg;
