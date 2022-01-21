import { Avatar, Button } from "@mui/material";
import React from "react";
import "./profilecard.css";

import { useNavigate, Link } from "react-router-dom";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

function Profilecard({ img, avatar, name, designation, connection }) {
  const navigate = useNavigate();

  return (
    <div className="profilecard">
      <img src={img} alt="" />
      {/* <CancelOutlinedIcon className="cancelicon" /> */}
      <Avatar className="avatar" src={avatar} alt="" />

      <h4 onClick={() => navigate(`/${name}`)}>{name}</h4>

      <p className="designation">{designation}</p>
      <p className="connection">{connection}</p>
      <Button className="profilecard_button">Connect</Button>
    </div>
  );
}

export default Profilecard;
