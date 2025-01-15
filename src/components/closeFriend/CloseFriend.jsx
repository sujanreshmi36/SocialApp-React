import React from "react";
import "./CloseFriend.css";
const CloseFriend = ({ users }) => {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={users.profilePicture} alt="" />
      <span className="sidebarFriendName">{users.username}</span>
    </li>
  );
};

export default CloseFriend;
