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
    <MusicPlayer
  song="Shape of You"
  artist="Ed Sheeran"
  image="https://i.scdn.co/image/ab67616d0000b2735221da87da5f6d266c8d236b"
  duration={233}
  progress={50}
  onPlayPause={(isPlaying) => console.log(`isPlaying: ${isPlaying}`)}
  onFastForward={() => console.log("fast forwarding")}
/>
    </>
  );
}



export default Home;

