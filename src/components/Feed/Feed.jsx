import React, { useState, useEffect } from "react";
import "./Feed.css";
import Share from "../share/Share";
import Post from "../post/post";
// import { Users } from "../../../dummy";
import axios from "axios";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(url + "/post/timeline-posts");
      setPosts(response.data);
    };
    fetchPost();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => {
          // const user = user.find((u) => u.id === post.userId); // Find the user for the post
          return <Post key={post.id} post={post} users={post.userId} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
