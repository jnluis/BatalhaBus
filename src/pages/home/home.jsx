import React, { useState } from "react";
import Slider from "./components/slider.jsx"
import TripDetails from "../../assets/TripDetails.svg";
import YTIcon from "../../assets/YTicon.svg";
import GoogleIcon from "../../assets/Browsericon.svg";
import GamesIcon from "../../assets/Gamesicon.svg";
import Weather from "./components/Weather.jsx"

function Home() {

  const buttonStyle = {
    width: '142px',
    height: '127px',
    margin: '0 40px',
    borderRadius: '10px',
    backgroundColor: '#E6B78C',
    color: 'black',
    //display: 'inline-flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    textAlign: 'center',
    fontSize : '22px',
    color: 'black',
    font : 'normal normal bold 22px/27px Poppins',
  }

  const buttonDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top : '300px'
  }

  return (
    <>
    <div className="fixed top-[50px] right-[80px] tem de mexer aqui depois de se tirar aquela merda de ser scrollable">  
      <Weather/>
    </div>
    <div className="fixed top-[370px] right-10 h-200 flex flex-col justify-center items-center">
    <Slider />
    </div>
    <div style= {buttonDivStyle}>
      <button style={buttonStyle}>
        <img src = {TripDetails} alt = "Trip Details" style={{ position: 'relative', left: '30%' , fontsize : '22px', marginBottom : '10px' }}/>
        Trip Details
      </button>
      <button style={buttonStyle}>
        <img src = {YTIcon} alt = "Media" style={{ position: 'relative', left: '30%' , fontsize : '22px', marginBottom : '10px' }}/>
        Media
      </button>
      <button style={buttonStyle}>
        <img src = {GoogleIcon} alt = "Browser" style={{ position: 'relative', left: '28%' , fontsize : '22px' , marginBottom : '10px'}}/>
        Browser
      </button>
      <button style={buttonStyle}>
        <img src = {GamesIcon} alt = "Games" style={{ position: 'relative', left: '28%' , fontsize : '22px' , marginBottom : '10px'}}/>
        Games
      </button>
    </div>
    

    </>
  );
}



export default Home;

