import { Avatar } from "@mui/material";
import React from "react";

import "./headeroption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__Icon" />}
      {avatar && <Avatar className="headerOption__Icon" src={avatar} />}
      <h3 className="headerOptionTitle">{title}</h3>
    </div>
  );
}

export default HeaderOption;
