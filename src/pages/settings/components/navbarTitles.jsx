import React, { Component } from "react";

function NavbarTitles(props) {
  return (
    <div
      className="text-black p-4 rounded-lg text-center border-t-2 border-black"
      style={{ fontSize: "23px" }}
    >
      {props.title}
    </div>
  );
}
export default NavbarTitles;
