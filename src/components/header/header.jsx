import React from "react";
import "./header.css";
import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => {
  return (
    <header className="header-section">
      <h2 className="name">Welcome to my realm !</h2>
      <div className="header-items">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="nav-btn">Home</button>
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="nav-btn">Work</button>
        </Link>
        <Link
          activeClass="active"
          to="connect"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="nav-btn">Connect</button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
