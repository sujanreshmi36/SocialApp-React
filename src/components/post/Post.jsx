import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
const Post = ({ post, users }) => {
  const [like, setLike] = useState(post.like);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const [isLiked, setIsliked] = useState(false);
  const handlelike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsliked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={PF + users?.profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{users?.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}like.png`}
              alt=""
              className="likeIcon"
              onClick={handlelike}
            />
            <img
              src={`${PF}heart.png`}
              alt=""
              className="likeIcon"
              onClick={handlelike}
            />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
