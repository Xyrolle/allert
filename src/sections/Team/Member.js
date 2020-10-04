import React from "react";

const Member = ({ name, surname, role, imgSrc }) => {
  return (
    <div className="member">
      <img src={imgSrc} alt="member" />
      <h4>
        {name} {surname}
      </h4>
      <p>{role}</p>
    </div>
  );
};

export default Member;
