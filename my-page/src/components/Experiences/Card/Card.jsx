import React from "react";
import "./card.css";

function Card({ icon, role }) {
  return (
    <>
      <div className="card-section " data-aos="zoom-out-up" >
        <div className="role">
          <span className="icon">{icon}</span>
          <h2>{role}</h2>
        </div>
        <div className="info">
          <h4>Organisation</h4>
          <h4>tenure</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            delectus quia aliquam magni vero itaque officia dolore deleniti iste
            dicta numquam consequuntur quis eligendi, ea nulla non eveniet quos
            enim sequi accusantium incidunt velit minus. Laborum quis ex error
            tempore vel accusamus quo ipsa optio deserunt vitae harum, enim minus!
          </p>
        </div>

      </div>
    </>
  );
}

export default Card;
