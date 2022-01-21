import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import "./organisation.css";

function Organisation({ img, role, company, exp }) {
  return (
    <div className="organisation">
      <div className="organisation_left">
        <img className="organisation_left_image" src={img} alt="" />
      </div>
      <div className="organisation_right">
        <Typography variant="subtitle1">{role}</Typography>
        <Typography variant="body1" color="gray" gutterBottom>
          {company}
        </Typography>
        <Typography variant="body2" color="gray" gutterBottom>
          {exp}
        </Typography>
        <Divider className="divider" />
      </div>
    </div>
  );
}

export default Organisation;
