import React from "react";
import Switch from "@material-ui/core/Switch";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ label, isChecked, Changed }) => {
  return (
    <div
      className={`toggle-switch ${
        isChecked ? "toggle-switch--dark" : "toggle-switch--light"
      }`}
    >
      <div className="toggle-switch__title">{`${label} Mode`}</div>
      <Switch checked={isChecked} onChange={Changed} />
    </div>
  );
};

export default ToggleSwitch;
