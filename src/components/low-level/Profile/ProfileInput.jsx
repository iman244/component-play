import "./ProfileInput.css";
import React from "react";
import ProfileImg from "../../low-level/Profile/ProfileImg";

function ProfileInput({
  className,
  p_className,
  i_className,
  input_className,
  src,
  placeholder,
}) {
  return (
    <div
      className={className ? `il-profileInput ${className}` : "il-profileInput"}
    >
      <ProfileImg className={p_className} i_className={i_className} src={src} />
      <input
        className={input_className ? input_className : null}
        placeholder={placeholder}
      />
    </div>
  );
}

export default ProfileInput;
