import "./PostContent.css";
import React from "react";

function PostContent({
  className,
  t_className,
  i_className,
  postImg,
  postText,
}) {
  return (
    <div
      className={className ? `il-postContent ${className}` : "il-postContent"}
    >
      <p className={t_className ? `il-postText ${t_className}` : "il-postText"}>
        {postText}
      </p>
      <img
        className={i_className ? `il-postImg ${i_className}` : "il-postImg"}
        src={postImg}
        alt="post"
      />
    </div>
  );
}

export default PostContent;
