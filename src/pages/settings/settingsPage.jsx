import React, { Component } from "react";

const values = {
  Appearance: {
    Theme: "Blue",
    Brightness: "50%",
    NightLight: "Off",
  },
  TextNFont: {
    Font: "Arial",
    FontSize: "14px",
    ReadAloud: "Off",
  },
  Accessibility: {
    ColourBlindMode: "Off",
    UnderlineLinks: "On",
  },
  SoundNVideo: {
    Volume: "50%",
    Mute: "Off",
    AutoPlay: "Off",
    OutputDevice: "Speakers",
  },
};

function SettingsPage() {
<<<<<<< Updated upstream
=======
  const values = {
    Appearance: {
      Theme: "Blue",
      Brightness: "50%",
      NightLight: "Off",
    },
    TextNFont: {
      Font: "Arial",
      FontSize: "14px",
      ReadAloud: "Off",
    },
    Accessibility: {
      ColourBlindMode: "Off",
      UnderlineLinks: "On",
    },
    SoundNVideo: {
      Volume: "50%",
      Mute: "Off",
      AutoPlay: "Off",
      OutputDevice: "Speakers",
    },
  };

  const settingsCategories = [];
  Object.keys(values).forEach((category, index) => {
    const settings = [];
    Object.entries(values[category]).forEach(([setting, value], index) => {
      if (typeof value === "string") {
        settings.push(
          <div key={index}>
            <span>{setting}: </span>
            <span>{value}</span>
          </div>
        );
      } /* else {
        settings.push(
          <div key={index}>
            <span>{setting}: </span>
            <span>{value.Now}</span>
          </div>
        );
      } */
    });

    settingsCategories.push(
      <div
        key={index}
        className="text-black p-4 rounded-lg border-t-2 border-black mb-16 "
      >
        <span className="px-16 pb-16">{category}</span>
        <span className="my-2">{settings}</span>
      </div>
    );
  });

>>>>>>> Stashed changes
  return (
    <div className="flex flex-row">
      <div className="basis-1/3">Navbar</div>
      <div className="basis-2/3 flex-nowrap">Actual Settings</div>
    </div>
  );
}

export default SettingsPage;
