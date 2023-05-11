import React from "react";
import On from "./Icons/On";
import Off from "./Icons/Off";

const Switch = ({ isOn, handleToggle }) => {
  return <div onClick={handleToggle}>{isOn ? <On /> : <Off />}</div>;
};

export default Switch;
