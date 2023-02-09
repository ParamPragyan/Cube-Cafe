import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/burger.jpg";

import AboutInfo from "./AboutInfo/AboutInfo";

const About = () => {
  return (
    <div>
      <HeroImage bgImage={bgImage} heading={["about us "]} />
      <AboutInfo />
    </div>
  );
};

export default About;
