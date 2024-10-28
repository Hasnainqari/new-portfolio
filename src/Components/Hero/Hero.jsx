import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CV from "../../assets/hasnainqari.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile_img" height={500} src={profile} alt="profile" />
      <h1>
        <span>I'm Hasnain Qari,</span> frontend develoepr based in Pakistan
      </h1>
      <p>
        A dedicated and disciplined frontend develoepr who love to website with
        latest technology, having more than 2 years of field experience I've
        delivered projects to many happy clients over globle.
      </p>
      <div className="hero-action">
        <a
          download="hasnainqari.pdf"
          href={CV}
          className="anchor-link hero-resume"
        >
          My Resume
        </a>
        <AnchorLink
          className="hero-connect anchor-link"
          offset={50}
          href="#contact"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Hero;
