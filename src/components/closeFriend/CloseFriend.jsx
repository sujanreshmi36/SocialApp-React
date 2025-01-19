import React from "react";
import "./CloseFriend.css";
const CloseFriend = ({ users }) => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={PF + users.profilePicture}
        alt=""
      />
      <span className="sidebarFriendName">{users.username}</span>
    </li>
  );
};

export default CloseFriend;
