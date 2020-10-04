import React, { Fragment } from "react";
import "./App.css";

import MainSection from "./sections/MainSection/MainSection";
import Features from "./sections/Features/Features";
import Team from "./sections/Team/Team";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <Fragment>
      <MainSection />
      <Features />
      <Team />
      <Footer />
    </Fragment>
  );
}

export default App;
