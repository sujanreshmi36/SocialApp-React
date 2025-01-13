import React from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Sujan Reshmi</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Love for All, Hatred For None</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" />
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">32</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">3 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
