//animation sahi karna hai 
// text ko hover pr dikhana hai 
// baaki props daalna hai 
// icons daalna hai 
// details daalna hai 

import React from "react";
import { MdDeveloperMode, MdOutlineContentPasteSearch, MdOutlineVolunteerActivism, MdPerson } from "react-icons/md";
import Card from "./Card/Card";
import "./experiences.css";

function Expirences() {
    return (
        <>
            <div className="experience-section">
                <h3 className="heading animate">Experiences </h3>
                <div className="cards scroll-in">
                    <Card role="Student head co-ordinator" icon={<MdPerson />} />
                    <Card role="Quality Assurance" icon={<MdDeveloperMode />} />

                    <Card role="Content writer" icon={<MdOutlineContentPasteSearch />} />
                    <Card role="Volunteer" icon={<MdOutlineVolunteerActivism />} />
                </div>


            </div>
        </>
    )
}
export default Expirences;