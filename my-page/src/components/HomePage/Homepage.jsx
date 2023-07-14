import React from "react";
import image from "../../images/profile-image.jpg";
import "./homepage.css";

function Homepage() {
    return (
        <>
            <div className="homepage">
                <div className="homepage-content"> <h1 className="text main-text animate">Shubh Jain</h1>
                    <h3 className="text description-text animate">'A Learner '</h3>
                    <p className=" text about animate ">
                        I am the wild wanderer, fueled by a passion for wildlife and a
                        penchant for adventure. By day, I am an aspiring frontend web
                        developer, weaving code like a digital maestro. By night, I delve into
                        the realms of graphic design and video editing, sculpting visual
                        wonders for my own amusement. With an entrepreneurial spirit, I strive
                        to add a dash of innovation to the world, one pixel at a time. Join me
                        on this whimsical journey as we navigate the digital wilderness
                        together.
                    </p>
                    <button className="button-17" role="button"><a href="mailto:your-email@example.com">Email Me</a>
                    </button>
                </div>
                <div className="image"> <img className="p-image animate" src={image} alt="profile-image" /></div>


            </div>
        </>
    );
}
export default Homepage;
