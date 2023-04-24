import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

import ReactDOM from "react-dom/client";
import App from "../App";

class Footer extends Component {
  render() {
    let footerClass = "fixed bottom-0 w-half bg-gray-800 text-white py-4";
    let partialClass =
      "max-w-6xl mx-auto px-4 flex justify-between items-center";
    let buttonClass = "text-lg font-medium rounded-full";

    return (
      <React.Fragment>
        <footer className={(footerClass += " left-0")}>
          <div className={partialClass}>
            <button className={buttonClass}>Home</button>
            <button className={buttonClass}>Timetable</button>
          </div>
        </footer>
        <footer className={(footerClass += " right-0")}>
          <div className={partialClass}>
            <button className={buttonClass}>Flag</button>
            <button className={buttonClass}>Settings</button>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
