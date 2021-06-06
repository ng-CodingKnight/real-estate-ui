import React from "react";
import "./PlainButton.scss";

const getType = (type) => {
  switch (type) {
    case "danger":
      return "button-box--danger";
    case "success":
      return "button-box--success";
    case "res":
      return "button-box--res";
    case "info":
      return "button-box--info";
    default:
      return "";
  }
};

const PlainButton = ({ label, type }) => {
  return (
    <div className="button-box">
      <button className={`${getType(type)}`}>
        <span>{label}</span>
      </button>
    </div>
  );
};

export default PlainButton;
