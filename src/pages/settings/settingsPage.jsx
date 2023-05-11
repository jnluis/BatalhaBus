import React, { useState } from "react";
import NavbarTitles from "./components/navbarTitles";
import Settings from "./components/settings";
import Navbar from "./components/navbar.jsx";
import Switch from "./components/Switch";
import SettingsSlider from "./components/SettingsSlider";

function SettingsPage() {
  const values = {
    Appearance: {
      Theme: "Blue",
      Brightness: (
        <SettingsSlider minLabel="0" maxLabel="100" ariaLabel="brightness" />
      ),
      NightLight: <Switch isOn={false} />,
    },
    TextNFont: {
      Font: "Arial",
      FontSize: (
        <SettingsSlider minLabel="14" maxLabel="24" ariaLabel="FontSize" />
      ),
      ReadAloud: <Switch isOn={false} />,
    },
    Accessibility: {
      ColourBlindMode: <Switch isOn={false} />,
      UnderlineLinks: <Switch isOn={true} />,
    },
    SoundNVideo: {
      Volume: <SettingsSlider minLabel="0" maxLabel="100" ariaLabel="Volume" />,
      Mute: <Switch isOn={false} />,
      AutoPlay: <Switch isOn={false} />,
      OutputDevice: "Speakers",
    },
  };

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
          {Object.entries(values).map(([category, settings], index) => (
            <div
              key={index}
              className="text-black p-4 rounded-lg border-t-2 border-black"
            >
              <span
                className="mx-32 px-8 mb-16 rounded-lg border-b-2 border-black"
                style={{ fontSize: "23px" }}
              >
                {category.replace("N", " & ")}
              </span>
              <div className="my-4">
                {Object.entries(settings).map(([setting, value], index) => (
                  <div key={index} className="my-1.5">
                    <span>{setting}: </span>
                    {typeof value === "string" ? <span>{value}</span> : value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
