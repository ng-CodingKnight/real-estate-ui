import React from "react";
import "./CardSection.scss";

const CardSection = ({ title, content, isDarkMode }) => {
  return (
    <div
      className={`card-section ${
        isDarkMode ? "card-section--dark" : "card-section--light"
      }`}
    >
      <div className="card-section__title">{title}</div>
      <div className="card-section__content">{content}</div>
    </div>
  );
};

export default CardSection;
