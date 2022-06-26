import "./FeedSocialMedia.css";
import React from "react";
import Share from "../../mid-level/SocialMedia_ShareLayout/Share1";
import { Posts } from "../../Data/FeedData";
import List from "../../mid-level/List/List";

function FeedSocialMedia({ className }) {
  return (
    <div
      className={
        className ? `il-feedSocialMedia ${className}` : "il-feedSocialMedia"
      }
    >
      <div className="il-feedSocialMediaWrapper">
        <Share />
        <List component={"Post"} data={Posts} />
      </div>
    </div>
  );
}

export default FeedSocialMedia;
