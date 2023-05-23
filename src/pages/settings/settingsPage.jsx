import React, { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Switch from "./components/Switch";
import SettingsSlider from "./components/SettingsSlider";

function SettingsPage() {
  const [nightLightSwitch, setNightLightSwitch] = useState(false);
  const [readAloudSwitch, setReadAloudSwitch] = useState(false);
  const [colourBlindModeSwitch, setColourBlindModeSwitch] = useState(false);
  const [underlineLinksSwitch, setUnderlineLinksSwitch] = useState(false);
  const [muteSwitch, setMuteSwitch] = useState(false);
  const [autoPlaySwitch, setAutoPlaySwitch] = useState(false);

  const values = {
    Appearance: {
      Theme: "Blue",
      Brightness: (
        <SettingsSlider minLabel="0" maxLabel="100" ariaLabel="brightness" />
      ),
      NightLight: (
        <Switch
          isOn={nightLightSwitch}
          onToggle={() => setNightLightSwitch(!nightLightSwitch)}
        />
      ),
    },
    TextNFont: {
      Font: "Arial",
      FontSize: (
        <SettingsSlider minLabel="14" maxLabel="24" ariaLabel="FontSize" />
      ),
      ReadAloud: (
        <Switch
          isOn={readAloudSwitch}
          onToggle={() => setReadAloudSwitch(!readAloudSwitch)}
        />
      ),
    },
    Accessibility: {
      ColourBlindMode: (
        <Switch
          isOn={colourBlindModeSwitch}
          onToggle={() => setColourBlindModeSwitch(!colourBlindModeSwitch)}
        />
      ),
      UnderlineLinks: (
        <Switch
          isOn={underlineLinksSwitch}
          onToggle={() => setUnderlineLinksSwitch(!underlineLinksSwitch)}
        />
      ),
    },
    SoundNVideo: {
      Volume: <SettingsSlider minLabel="0" maxLabel="100" ariaLabel="Volume" />,
      Mute: (
        <Switch isOn={muteSwitch} onToggle={() => setMuteSwitch(!muteSwitch)} />
      ),
      AutoPlay: (
        <Switch
          isOn={autoPlaySwitch}
          onToggle={() => setAutoPlaySwitch(!autoPlaySwitch)}
        />
      ),
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
                style={{ fontSize: "34px" }}
              >
                {category.replace("N", " & ")}
              </span>
              <div className="my-4" style={{ fontSize: "24px" }}>
                {Object.entries(settings).map(([setting, value], index) => (
                  <div key={index} className="my-1.5">
                    <span>{setting}: </span>
                    {typeof value === "string" ? (
                      <span>
                        <b>{value}</b>
                      </span>
                    ) : (
                      value
                    )}
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
