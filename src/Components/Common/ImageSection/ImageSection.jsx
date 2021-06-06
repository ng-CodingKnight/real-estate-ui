import React from "react";
import "./ImageSection.scss";

const ImageSection = ({ data }) => {
  return (
    <div className="image-section">
      <img src={data.imagePath} alt="landing-header" />

      <div className="image-section__content">
        <div className="image-section__title">{data.header}</div>
        <div className="image-section__subheader">{data.tagline}</div>
      </div>
    </div>
  );
};

export default ImageSection;
