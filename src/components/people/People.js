import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import "./people.css";

function People({ name, avatar, designation, btnName }) {
  return (
    <div className="people">
      <div className="people_top">
        <Avatar className="avatar_top" src={avatar} alt="" />
        <div>
          <Typography variant="body1" color="black">
            {name}
          </Typography>
          <Typography variant="body2" color="gray" gutterBottom>
            {designation}
          </Typography>
        </div>
      </div>
      <Button className="people_button">{btnName}</Button>
    </div>
  );
}

export default People;
