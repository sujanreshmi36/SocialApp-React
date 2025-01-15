import React from "react";
import "./Rightbar.css";
import Online from "../online/Online";
import { Users } from "../../../dummy";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriends">
          {Users.map((user) => (
            <Online users={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
