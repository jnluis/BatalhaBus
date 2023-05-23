import React from "react";
import On from "./Icons/On";
import Off from "./Icons/Off";

function Switch({ isOn, onToggle }) {
  const handleClick = () => {
    onToggle(!isOn);
  };

  return <div onClick={handleClick}>{isOn ? <On /> : <Off />}</div>;
}

export default Switch;
