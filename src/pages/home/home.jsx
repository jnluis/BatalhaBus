import React, { useState } from "react";
import Slider from "./components/slider.jsx"
import Weather from "./components/Weather.jsx"

function Home() {

  return (
    <>
    <div className="fixed top-[50px] right-[80px] tem de mexer aqui depois de se tirar aquela merda de ser scrollable">  
      <Weather/>
    </div>
    <div className="fixed top-[370px] right-10 h-200 flex flex-col justify-center items-center">
    <Slider />
    </div>

    </>
  );
}



export default Home;

