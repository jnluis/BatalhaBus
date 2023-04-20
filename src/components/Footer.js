import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

import ReactDOM from "react-dom/client";
import App from "../App";

class Footer extends Component {
  render() {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <button className="text-lg font-medium">Home</button>
          <button className="text-lg font-medium">Timetable</button>
          <div className="bg-gray-0"> </div>
          <button className="text-lg font-medium">Flag</button>
          <button className="text-lg font-medium">Settings</button>
        </div>
      </footer>
    );
  }
}

export default Footer;
