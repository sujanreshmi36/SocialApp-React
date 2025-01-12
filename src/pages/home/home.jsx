import React from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Rightbar from "../rightbar/Rightbar";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
