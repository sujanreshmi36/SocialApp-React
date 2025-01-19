import React from "react";
import "./Following.css";
const Following = ({ users }) => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  return (
    <div className="rightbarFollowing">
      <img
        src={PF + users.profilePicture}
        alt=""
        className="rightbarFollowingImg"
      />
      <span className="rightbarFollowingName">{users.username}</span>
    </div>
  );
};

export default Following;
