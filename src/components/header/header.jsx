import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header className="header-section">
      <h2 className="name">Welcome to my realm !</h2>
      <div className="header-items">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Work</button>
        <button className="nav-btn">Connect</button>
      </div>
    </header>
  );
};
export default Header;
