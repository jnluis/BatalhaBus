import React from "react";
import NavbarTitles from "./components/navbarTitles";
import Settings from "./components/settings";
import Navbar from "./components/navbar.jsx";

function SettingsPage() {
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
        className="text-black p-4 rounded-lg border-t-2 border-black"
      >
        <span className="px-16">{category}</span>
        <span className="my-2">{settings}</span>
      </div>
    );
  });

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-row max-h-128">
        <div className="basis-1/3 border-r-4 border-black pl-8 pr-16">
          <Navbar
            titles={[
              "Appearance",
              "Text & Font",
              "Accessibility",
              "Sound & Video",
            ]}
          />
        </div>
        <div className="basis-2/3 flex-nowrap pl-16 pr-8 overflow-auto">
          {settingsCategories}
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
          <div className="pl-16">q</div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
