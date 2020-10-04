import React from "react";

import "./MainSection.css";

import NavigationBar from "./NavigationBar";
import BackgroundVideo from "./BackgroundVideo";
import CenteredText from "./CenteredText";

const MainSection = () => {
  return (
    <div id="main-section">
      <NavigationBar />
      <BackgroundVideo />
      <CenteredText />
    </div>
  );
};

export default MainSection;
