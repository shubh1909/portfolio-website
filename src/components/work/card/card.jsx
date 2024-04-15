import React from "react";
import "./card.css";

const Card = ({ image, title, description, link, githubLink }) => {
  return (
    <>
      <div className="card-section">
        <div className="img-section">
          <img src={image} alt="project-image" />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <b>Project link :</b>{" "}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GO to project
            </a>
          </p>
          <p>
            <b>Github link :</b>{" "}
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Open repositiry
            </a>
          </p>
        </div>
      </div>
      <div className="card-item"></div>
    </>
  );
};

export default Card;
