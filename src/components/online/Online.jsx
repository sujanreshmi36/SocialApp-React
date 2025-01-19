import React from "react";
import "./online.css";
const Online = ({ users }) => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarImageContainer">
        <img
          src={PF + users.profilePicture}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{users.username}</span>
    </li>
  );
};

export default Online;
