import React, { useState } from "react";
import "./connect.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Connect = () => {
  const [email, setEmail] = useState("");
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNext = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shubhj1909@gmail.com?subject=Email%20from%20User&body=${encodeURIComponent(
      email
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div
        className="connect-section"
        id="connect"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="heading">Let's connect !!</h2>
        <div className="email">
          <p>Email me :</p>
          <div className="email-content">
            <input
              type="text"
              value={email}
              onChange={handleInputChange}
              oninput="adjustInputSize(this)"
            />
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
        <div className="social-icons">
          <a
            href="http://github.com/shubh1909"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/shubh-jain-8b5148176"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Connect;
