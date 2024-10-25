import React from "react";
import "./MyWork.css";
import themePattern from "../../assets/theme-pattern.svg";
import Mywork_Data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id='portfolio' className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img width={230} src={themePattern} alt="" />
      </div>
      <div className="mywork-container">
        {Mywork_Data.map((work, index) => {
          return <img className="for_radius" key={index} src={work.w_img} alt="work" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
