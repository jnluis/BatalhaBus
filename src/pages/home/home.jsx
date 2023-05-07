import React from "react";
import Slider from "./components/slider.jsx";
import TripDetails from "../../assets/TripDetails.svg";
import YTIcon from "../../assets/YTicon.svg";
import GoogleIcon from "../../assets/Browsericon.svg";
import GamesIcon from "../../assets/Gamesicon.svg";
import Weather from "./components/Weather.jsx";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ProgressBar from "./components/ProgressBar.jsx";

function Home() {
  const buttonStyle = {
    width: "142px",
    height: "127px",
    margin: "0 40px",
    borderRadius: "10px",
    backgroundColor: "#E6B78C",
    color: "black",
    //display: 'inline-flex',
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "22px",
    color: "black",
    font: "normal normal bold 22px/27px Poppins",
  };

  const buttonDivStyle = {
    display: "flex",
    marginLeft: "85px",
    position: "relative",
    top: "70px",
  };

  return (
    <>
      <div className="fixed top-[30px] right-[80px] tem de mexer aqui depois de se tirar aquela merda de ser scrollable">
        <Weather />
      </div>
      <div className="fixed top-[370px] right-10 h-200 flex flex-col justify-center items-center">
        <Slider />
      </div>
      <div className="ml-32">
        <Typography sx={{ display: "flex" }}>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 24 }}>
            FROM:{" "}
          </span>
          <span style={{ color: "#FFFFFF", fontSize: 24 }}>
            {" "}
            Oliveira de Frades
          </span>
        </Typography>
        <Typography>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 24 }}>
            TO:{" "}
          </span>
          <span style={{ color: "#FFFFFF", fontSize: 24 }}> Coimbra B</span>
        </Typography>
      </div>
      <div className="ml-36 mt-5">
        <ProgressBar />
      </div>

      <div style={buttonDivStyle}>
        <Link to="/trip-details">
          <button style={buttonStyle}>
            <img
              src={TripDetails}
              alt="Trip Details"
              style={{
                position: "relative",
                left: "30%",
                fontsize: "22px",
                marginBottom: "10px",
              }}
            />
            Trip Details
          </button>
        </Link>
        <Link to="/media">
          <button style={buttonStyle}>
            <img
              src={YTIcon}
              alt="Media"
              style={{
                position: "relative",
                left: "30%",
                fontsize: "22px",
                marginBottom: "10px",
              }}
            />
            Media
          </button>
        </Link>
        <Link to="/browser">
          <button style={buttonStyle}>
            <img
              src={GoogleIcon}
              alt="Browser"
              style={{
                position: "relative",
                left: "28%",
                fontsize: "22px",
                marginBottom: "10px",
              }}
            />
            Browser
          </button>
        </Link>
        <Link to="/games">
          <button style={buttonStyle}>
            <img
              src={GamesIcon}
              alt="Games"
              style={{
                position: "relative",
                left: "28%",
                fontsize: "22px",
                marginBottom: "10px",
              }}
            />
            Games
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
