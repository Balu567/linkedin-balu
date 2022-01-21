import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/The_future_%28Unsplash%29.jpg/800px-The_future_%28Unsplash%29.jpg"
          alt=""
        />
        <Avatar className="sidebar_avatar" src={user.photoUrl} alt="">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,784</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("design")}
        {recentItem("reactjs")}
        {recentItem("software engg")}
        {recentItem("javascript")}
        {recentItem("programming")}
      </div>
    </div>
  );
}

export default Sidebar;
