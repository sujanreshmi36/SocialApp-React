import React, { useState } from "react";
import "./Feed.css";
import Share from "../share/Share";
import { Posts } from "../../../dummy";
import Post from "../post/post";
import { Users } from "../../../dummy";
const Feed = () => {
  //   const[posts,setPosts]=useState([]);
  //   useEffect(()=>{
  // const fetchPost=async ()=>{
  //  const res=await axios.get("post/timeline-posts");
  // }
  //   },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => {
          const user = Users.find((u) => u.id === post.userId); // Find the user for the post
          return <Post key={post.id} post={post} users={user} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
