import React, { Component } from "react";
import NavbarTitles from "./navbarTitles";

function Navbar(props) {
  const navbarTitles = [];
  props.titles.forEach((title, index) => {
    navbarTitles.push(<NavbarTitles key={index} title={title} />);
  });

  return <div className="flex flex-col ">{navbarTitles}</div>;
}

export default Navbar;
