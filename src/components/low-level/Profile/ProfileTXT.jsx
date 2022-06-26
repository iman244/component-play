import "./ProfileTXT.css";
import React from "react";
import ProfileImg from "./ProfileImg";

function ProfileTXT({
  className,
  p_className,
  t_className,
  i_className,
  s_className,
  badge,
  src,
  text,
}) {
  return (
    <div className={className ? `il-profileTXT ${className}` : "il-profileTXT"}>
      <ProfileImg
        className={p_className ? p_className : null}
        i_className={i_className ? i_className : null}
        s_className={s_className ? s_className : null}
        badge={badge ? badge : null}
        src={src}
        alt="profile"
      />
      <span
        className={t_className ? `il-desText ${t_className}` : "il-desText"}
      >
        {text}
      </span>
    </div>
  );
}

export default ProfileTXT;
