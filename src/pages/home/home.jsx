import React, { useState } from "react";
import Slider from "./components/slider.jsx"
import MusicPlayer from "./components/MusicPlayer.jsx"

function Home() {
  const [value, setValue] = useState(40);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>

    <div className="fixed top-[370px] right-10 h-200 flex flex-col justify-center items-center">
    <Slider />
    </div>
    <MusicPlayer />

    </>
  );
}



export default Home;

