import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import "./widget.css";

function Widget() {
  const newsArticle = (heading, subTitle) => {
    return (
      <div className="article">
        <div className="article__left">
          <FiberManualRecordIcon />
        </div>
        <div className="article__right">
          <h4>{heading}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widget">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Balu is back", "Top News")}
      {newsArticle("Balu is back", "Top News")}
      {newsArticle("Balu is back", "Top News")}
      {newsArticle("Balu is back", "Top News")}
      {newsArticle("Balu is back", "Top News")}
    </div>
  );
}

export default Widget;
