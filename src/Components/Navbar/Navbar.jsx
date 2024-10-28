import React, { useRef, useState } from "react";
import "./Navbar.css";
// import underline from "../../assets/theme-pattern.svg.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import themePattern from "../../assets/theme-pattern.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h1>HasQ</h1>
        <img src={themePattern} alt="logo" />
      </div>
      <img
        onClick={openMenu}
        src={menu_open}
        alt="menu_open"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="menu_close"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <img src={themePattern} width={40} alt="underline_icon" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? (
            <img src={themePattern} width={40} alt="underline_icon" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? (
            <img src={themePattern} width={40} alt="underline_icon" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? (
            <img src={themePattern} width={40} alt="underline_icon" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img src={themePattern} width={40} alt="underline_icon" />
          ) : (
            <></>
          )}
        </li>
      </ul>

      <AnchorLink
        className="nav-connect anchor-link"
        offset={50}
        href="#contact"
      >
        Connect With Me
      </AnchorLink>
    </div>
  );
};

export default Navbar;
