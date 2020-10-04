import React from "react";

import "./Features.css";

import pixel from "../../assets/pixel.png";

const Features = () => {
  return (
    <div id="features">
      <div className="row">
        <div className="column">
          <img src={pixel} alt="pixel" className="pixel" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="row features-heading">
            <h2>All information that you need in your pocket</h2>
          </div>
          <div className="row">
            <p className="features-description">
              AIlert is a deep neural network that predicts possible hazards for
              the next few days around the world. We have created a mobile
              application with a map, where you can select the area of interest.
              However, a person can also be alerted to a threat that will be
              nearby his location.
            </p>
            <p className="features-description">
              The neural network itself consists of several layers of neurons,
              so it produces fairly good indicators on rather big data. It
              processes datasets that have been fetched from NASA and ECAD.
              Specifically, it considers such measurements as: temperature,
              pressure, radiation, cloudiness, rain and others.
            </p>
            <p className="features-description">
              We believe that our project will be of use to everyone. Firstly,
              everyone can take care of themselves. Secondly, the government can
              calculate the potential danger zones and take precautions for
              their country or regions. At last, farmers and businessmen whose
              activity is connected with growth of grain crops can ensure that
              their fields are safe from nature threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
