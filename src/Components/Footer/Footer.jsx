import React, { useEffect, useState } from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
import themePattern from "../../assets/theme-pattern.svg";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 86400000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
        <div className="footer-logo">
        <h1>HasQ</h1>
        <img src={themePattern} alt="logo" />
      </div>
          <p>
            I am a frontend developer from, Pakistan with 3 years of experience.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user_icon" />
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © {currentYear} Hasnain Qari. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a href="">Facebook</a>
          <a href="">Linkedin</a>
          <a href="">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
