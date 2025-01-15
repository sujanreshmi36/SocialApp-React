import React from "react";
import "./online.css";
const Online = ({ users }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarImageContainer">
        <img src={users.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{users.username}</span>
    </li>
  );
};

export default Online;
