import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/burger.jpg";

import AboutInfo from './AboutInfo/AboutInfo'
/// import Gallery from './Gallery/Gallery'

const About = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["about us "]}
      />
      <AboutInfo />
      {/* <OurData /> */}
      {/* <Gallery /> */}
    </div>
  );
};

export default About;
