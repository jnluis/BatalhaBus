import React, { useState } from "react";
import Slider from "./components/slider.jsx"

function Home() {

  return (
    <>

    <div className="fixed top-[370px] right-10 h-200 flex flex-col justify-center items-center">
    <Slider />
    </div>

    </>
  );
}



export default Home;

