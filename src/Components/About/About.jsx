import React from "react";
import "./About.css";
import themePattern from "../../assets/theme-pattern.svg";
import profile from "../../assets/profile.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img width={230} src={themePattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            className="profile_img"
            height={500}
            src={profile}
            alt="profile"
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a seasoned Frontend Developer with more than ten years of
              professional experience. Over the course of my career, I’ve had
              the opportunity to work with renowned organizations, playing a key
              role in their success and development.
            </p>
            <p>
              My deep commitment to frontend development shines through both my
              extensive experience and the energy and dedication I bring to
              every project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};

export default About;
