import "./ProfileTXTList.css";
import React from "react";
import ProfileTXT from "../../low-level/Profile/ProfileTXT";

function ProfileTXTList({ className, p_className, data }) {
  return (
    <ul
      className={
        className ? `il-profileTXTList ${className}` : "il-profileTXTList"
      }
    >
      {data.map((item) => (
        <li key={item.text}>
          <ProfileTXT
            p_className={p_className ? p_className : null}
            src={item.src}
            text={item.text}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProfileTXTList;
