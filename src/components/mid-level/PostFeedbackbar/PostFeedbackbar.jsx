import "./PostFeedbackbar.css";
import React from "react";
import Like from "../../low-level/Specials/Like";
import Heart from "../../low-level/Specials/Heart";

function PostFeedbackbar({ className, nLike, nComment }) {
  return (
    <div
      className={
        className ? `il-postFeedbackBar ${className}` : "il-postFeedbackBar"
      }
    >
      <div className="il-bottomLeft">
        <Like />
        <Heart />
      </div>
      <div className="il-bottomRight">
        <span>4 comments</span>
      </div>
    </div>
  );
}

export default PostFeedbackbar;
