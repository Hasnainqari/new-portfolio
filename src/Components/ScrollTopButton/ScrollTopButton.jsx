// import { useLayoutEffect } from "react";
import { useEffect } from "react";
import "./ScrollTopButton.css";
import { scroll } from "../scroll";
import arrow from "../../assets/right.png";

const ScrollTopButton = () => {
  useEffect(() => {
    scroll();
  }, []);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => scrollTop()}
    >
      <span>
        <img src={arrow} alt="" />
      </span>
    </div>
  );
};
export default ScrollTopButton;
