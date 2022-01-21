import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";

import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../../config/fbconfig";
import { style } from "@mui/system";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption
          onClick={() => navigate("/")}
          Icon={HomeIcon}
          title="Home"
        />

        <HeaderOption
          onClick={() => navigate("/mynetwork")}
          Icon={SupervisorAccountIcon}
          title="My Network"
        />

        <HeaderOption
          onClick={() => navigate("/jobs")}
          Icon={BusinessCenterIcon}
          title="Jobs"
        />

        <Link to="/mynetwork" className="link">
          <HeaderOption Icon={ChatIcon} title="Messaging" />
        </Link>
        <Link to="/" className="link">
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        </Link>

        <HeaderOption
          onClick={logOutApp}
          avatar="https://media-exp1.licdn.com/dms/image/C4D03AQG6MlltU1nn2w/profile-displayphoto-shrink_100_100/0/1517542199656?e=1646265600&v=beta&t=y3QDCFShlGtDzBl10GywRUYoP6uS7_lzVMUOFhuNo3s"
          title="me"
        />
        <Link to="/mynetwork" className="link">
          <HeaderOption Icon={AppsIcon} title="Work" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
