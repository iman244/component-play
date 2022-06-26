import "./Post.css";
import React from "react";
import PostContent from "../../low-level/Post/PostContent";
import Topbar from "../Topbar/Topbar";
import PostFeedbackbar from "../PostFeedbackbar/PostFeedbackbar";

function Post({ className, userImg, user, postText, postImg }) {
  return (
    <div className={className ? `il-post ${className}` : "il-post"}>
      <div className="il-postWrapper">
        <Topbar UserImgSrc={userImg} UserImgTXT={user} />
        <PostContent className="my-3" postImg={postImg} postText={postText} />
        <PostFeedbackbar />
      </div>
    </div>
  );
}

export default Post;
