import React from "react";
import PlainButton from "../../ui-elements/Buttons/PlainButton/PlainButton";
import "./IntroBox.scss";

const IntroBox = ({ data }) => {
  return (
    <div className="intro-box">
      <div
        className={`intro-box__container ${
          data.isReverse
            ? "intro-box__container--right"
            : "intro-box__container--left"
        }`}
      >
        <div className="intro-box__image">
          <img src={data.image} alt="image" />
        </div>
        <div className="intro-box__content">
          <div className="intro-box__content--header">{data.title}</div>
          <div className="intro-box__content--subheader">
            {data.description}
          </div>
          <PlainButton type="info" label="Get Details" />
        </div>
      </div>
    </div>
  );
};

export default IntroBox;
