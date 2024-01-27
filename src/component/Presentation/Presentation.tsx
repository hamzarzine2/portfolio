import "./Presentation.css";
import React from "react";
import Image from "next/image";
import pp from "../../images/pp.jpg";
import LinkSection from "../LinkSection/LinkSection";

export default function Presentation() {
  return (
    <div className="personal-info">
      <div >
        <Image className="profile-pic" src={pp} alt="Profile picture" />
        <div className="contact-info">
          <p>E-Mail: Hamza.rzine@outlook.com</p>
          <p>Phone Number: +32 484 05 95 53</p>
          <p>Location: Belgium</p>
          <p>City: Brussels</p>
          <p>Age: 21</p>
          <br />
        </div>
      </div>
      <div>
        <LinkSection/>
      </div>
    </div>
  );
}
