import React from "react";
import "./home.css";
import profileImage from "../../assets/profileImage.png";
import About from "./about/about";
const Home = () => {
  return (
    <>
      <div className="home-section">
        <img className="profile-img" src={profileImage} alt="dp" />
        <div className="home-item">
          <h1>Shubh Jain</h1>
          <h2>
            <i>MERN developer | App developer </i>{" "}
          </h2>
          <h2>
            <i>Video editor | Wildlife activist </i>{" "}
          </h2>
        </div>
      </div>
      <About className="about-section" />
    </>
  );
};
export default Home;
