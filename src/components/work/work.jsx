import React from "react";
import "./work.css";
import Card from "./card/card";
import tindog from "../../assets/tindog.png";
import Aqims from "../../assets/Aqims.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
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
            image={ecommerce}
            title="Ecommerce Website"
            description="The  project  is  a  comprehensive  e-commerce  web  application  built  with  ReactJS,  integrating  payment  processing  through  Stripe,  and  utilising  Strapi  as  the  backend  for  managing  and  serving  content  and 
            data."
            link="https://www.linkedin.com/posts/shubh-jain-8b5148176_reactjs-strapi-ecommercewebapp-activity-7141005696782839808-lTe_?utm_source=share&utm_medium=member_desktop"
            githubLink="https://github.com/shubh1909/e-commerce/tree/shubh-dev"
          />
          <Card
            image={Aqims}
            title="Air quality monitoring system"
            description="The  project  is  an  air  quality  monitoring  system  implemented  with  Arduino  UNO,  MQ135  gas  sensor,  and  an  LCD  display.  It  enables  real-time  tracking  and  display  of  air  quality  parameters 
            for environmental monitoring."
            link="https://docs.google.com/document/d/1A1iN-THPo4Pkwq6P_WfCXzNTEOuHHEg6/edit?usp=sharing&ouid=117478896567657188096&rtpof=true&sd=true"
          />
        </div>
      </div>
    </>
  );
};
export default Work;
