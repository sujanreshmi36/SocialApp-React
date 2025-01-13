import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
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
