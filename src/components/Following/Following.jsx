import React from "react";
import "./Following.css";
const Following = ({ users }) => {
  return (
    <div className="rightbarFollowing">
      <img src={users.profilePicture} alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">{users.username}</span>
    </div>
  );
};

export default Following;
