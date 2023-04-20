import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

import ReactDOM from "react-dom/client";
import App from "../App";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="fixed bottom-0 left-0 w-half bg-gray-800 text-white py-4">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <button className="text-lg font-medium rounded-full">Home</button>
            <button className="text-lg font-medium rounded-full">
              Timetable
            </button>
          </div>
        </footer>
        <footer className="fixed bottom-0 right-0 w-half bg-gray-800 text-white py-4">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <button className="text-lg font-medium rounded-full bg-color-white-500">
              Flag
            </button>
            <button className="text-lg font-medium rounded-full">
              Settings
            </button>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
