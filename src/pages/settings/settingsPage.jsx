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
  return (
    <div className="flex flex-row">
      <div className="basis-1/3">Navbar</div>
      <div className="basis-2/3 flex-nowrap">Actual Settings</div>
    </div>
  );
}

export default SettingsPage;
