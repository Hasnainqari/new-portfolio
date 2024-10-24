import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            download="hasnainqari.pdf"
            href="../../assets/hasnainqari.pdf"
            className="anchor-link"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
