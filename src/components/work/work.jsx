import React from "react";
import "./work.css";
import Card from "./card/card";
import tindog from "../../assets/tindog.png";
const Work = () => {
  return (
    <>
      <div
        className="work-section"
        data-aos="fade-up"
        data-aos-duration="1500"
        id="work"
      >
        <h2 className="heading"> My work</h2>
        <div className="projects">
          <Card
            image={tindog}
            title="Tindog"
            description="A dog-friendly website for dogs to adopt. Made purely using HTML and CSS."
            link="https://tindog.netlify.app/"
            githubLink="https://github.com/siddharthsharma94/Tindog"
          />
          <Card
            image={tindog}
            title="Tindog"
            description="A dog-friendly website for dogs to adopt. Made purely using HTML and CSS."
            link="https://tindog.netlify.app/"
            githubLink="https://github.com/siddharthsharma94/Tindog"
          />
          <Card
            image={tindog}
            title="Tindog"
            description="A dog-friendly website for dogs to adopt. Made purely using HTML and CSS."
            link="https://tindog.netlify.app/"
            githubLink="https://github.com/siddharthsharma94/Tindog"
          />
          <Card
            image={tindog}
            title="Tindog"
            description="A dog-friendly website for dogs to adopt. Made purely using HTML and CSS."
            link="https://tindog.netlify.app/"
            githubLink="https://github.com/siddharthsharma94/Tindog"
          />
        </div>
      </div>
    </>
  );
};
export default Work;
