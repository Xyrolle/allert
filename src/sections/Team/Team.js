import React from "react";

import "./Team.css";

import Member from "./Member";

import members from "./members";

import playStore from "../../assets/playstore.png";

const Team = () => {
  return (
    <div id="team">
      <div id="download">
        <h3>Be safe.</h3>
        <p>
          <bold>Try</bold> our app.
        </p>
        <button className="downloadBtn">
          <img src={playStore} alt="get it on android" /> Download
        </button>
      </div>
      <h3 className="team-heading">MEET OUR TEAM</h3>
      <div className="members-container">
        {members.map((member) => (
          <Member
            name={member.name}
            surname={member.surname}
            role={member.role}
            imgSrc={member.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
