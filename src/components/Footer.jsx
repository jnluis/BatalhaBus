import React, { Component } from "react";
import "../index.css";

class Footer extends Component {
  render() {
    let footerClass = "w-full bg-gray-800 text-white py-4";
    let partialClass =
      "max-w-6xl mx-auto px-4 flex justify-between items-center";
    let buttonClass = "text-lg font-medium rounded-full bg-white";

    return (
      <footer className={footerClass} style={{ position: "fixed", bottom: 0 }}>
        <div className={"static left-0 " + partialClass}>
          <button className={buttonClass}>Home</button>
          <button className={buttonClass}>Timetable</button>
        </div>
        <div className={"static right-0 " + partialClass}>
          <button className={buttonClass}>Flag</button>
          <button className={buttonClass}>Settings</button>
        </div>
      </footer>
    );
  }
}

export default Footer;
