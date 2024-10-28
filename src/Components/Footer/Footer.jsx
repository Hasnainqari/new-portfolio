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
          {/* <div className="footer-email-input">
            <img src={user_icon} alt="user_icon" />
            <input type="email" name="email" placeholder="Enter your email" />
          </div> */}

          <a
            className="footer-subscribe"
            target="_blank"
            href="https://www.google.com/search?q=hasnain+qari&sca_esv=ecf90fb16855ea79&authuser=1&sxsrf=ADLYWIJx7p1G_k2pHtNocDqP-WI7CWKocQ%3A1729840143123&source=hp&ei=D0QbZ_r6BNulkdUP3piRqA0&iflsig=AL9hbdgAAAAAZxtSHy9EemPhpjzeAid_rq7N2-MEzDVe&oq=hasnain&gs_lp=Egdnd3Mtd2l6IgdoYXNuYWluKgIIADIKECMYgAQYJxiKBTIFEAAYgAQyChAAGIAEGEMYigUyDRAuGIAEGLEDGEMYigUyBRAAGIAEMgoQABiABBhDGIoFMgUQLhiABDIFEAAYgAQyBRAuGIAEMgUQLhiABEiKHlDDEVi7FnABeACQAQCYAeYBoAHiCqoBBTAuNS4yuAEDyAEA-AEBmAIIoAKJC6gCCsICBxAjGCcY6gLCAgQQIxgnwgILEAAYgAQYkQIYigXCAggQLhiABBixA8ICDhAAGIAEGLEDGIMBGIoFwgIIEAAYgAQYsQPCAhEQLhiABBiRAhjRAxjHARiKBcICCxAAGIAEGLEDGIMBwgIKEC4YgAQYQxiKBcICDRAAGIAEGLEDGEMYigXCAgsQLhiABBixAxjUApgDCZIHBTEuNC4zoAfqXA&sclient=gws-wiz#lrd=0x61cb5a5230cd3a49:0x375f4c5346fcb3f7,3,,,,"
          >
            Add your review
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © {currentYear} Hasnain Qari. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a
            target="_blank"
            href="https://www.facebook.com/people/Muhammad-Hasnain-Qari/61564675833358/"
          >
            Facebook
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/hasnainqari/">
            Linkedin
          </a>
          <a target="_blank" href="https://www.instagram.com/hasnain.qari.35/">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
