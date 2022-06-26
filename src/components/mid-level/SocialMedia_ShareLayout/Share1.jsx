import "./Share1.css";
import { Data_ShareLayout } from "../../Data/Data_ShareLayout";
import React from "react";
import ProfileInput from "../../low-level/Profile/ProfileInput";
import IconsTXTList from "../IconsTXTList/IconsTXTList";
import ButtonSimple from "../../low-level/Button/ButtonSimple";

function Share({ className }) {
  return (
    <div className={className ? `il-share ${className}` : "il-share"}>
      <ProfileInput
        src="/assets/person/1.jpeg"
        placeholder="Share your thoughts with others! ..."
        i_className="h-10 w-10"
      />
      <hr className="m-3" />
      <div className="share-btns">
        <IconsTXTList
          className="share-icons"
          iT_className="shareIconTXT"
          data={Data_ShareLayout}
        />
        <ButtonSimple>Share</ButtonSimple>
      </div>
    </div>
  );
}
export default Share;
