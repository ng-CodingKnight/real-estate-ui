import React from "react";
import { LandingData, LandingIntro } from "../../assets/mockData/landing";
import ImageSection from "../../Components/Common/ImageSection/ImageSection";
import IntroBox from "../../Components/Common/IntroBox/IntroBox";

import "./Landing.scss";

const Landing = ({ isDarkMode }) => {
  return (
    <div className="landing-container">
      <ImageSection data={LandingIntro} />
      <div className="landing-container__projects">
        {LandingData.map((item, index) => {
          return (
            <div className="landing-container__project" key={index}>
              <IntroBox data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
