import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import HomeButton from "./FooterComponents/HomeButton";
import TripDetailsButton from "./FooterComponents/TripDetailsButton";
import MediaButton from "./FooterComponents/MediaButton";
import BrowserButton from "./FooterComponents/BrowserButton";
import GamesButton from "./FooterComponents/GamesButton";
import SettingsButton from "./FooterComponents/SettingsButton";
import MusicPlayer from "../pages/home/components/MusicPlayer.jsx";
import TimeTableModal from "./FooterComponents/TimeTableModal.jsx";

function Navbar() {
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";

  const isTripDetailsPage = location.pathname === "/trip-details";
  const isMediaPage = location.pathname === "/media";
  const isBrowserPage = location.pathname === "/browser";
  const isGamesPage = location.pathname === "/games";
  const isSettingsPage = location.pathname === "/settings";
  function findPage() {
    return isHomePage ? "1/3" : "1/2";
  }

  return (
    <div
      className="basis-full flex fixed bottom-0 flex-nowrap justify-between"
      style={{ height: "160px", width: "1194px" }}
    >
      <nav
        id="LeftNavBar"
        className={"shadow-lg pb-10 flex justify-start basis" + findPage()}
      >
        <Link to="/">
          <HomeButton
            className={
              isHomePage ? "border-4 border-green-700" : "border-2 border-black"
            }
          />
        </Link>
        {isHomePage && <TimeTableModal />}

        {!isHomePage && (
          <Link to="/trip-details">
            <TripDetailsButton
              className={
                isTripDetailsPage
                  ? "border-4 border-green-700"
                  : "border-2 border-black"
              }
            />
          </Link>
        )}
        {!isHomePage && (
          <Link to="/media">
            <MediaButton
              className={
                isMediaPage
                  ? "border-4 border-green-700"
                  : "border-2 border-black"
              }
            />
          </Link>
        )}
      </nav>
      {isHomePage && (
        <nav className="justify-center basis-1/3 ml-12 mt-4">
          <MusicPlayer />
        </nav>
      )}
      <nav
        id="RightNavBar"
        className={"shadow-lg flex pb-10 justify-end basis" + findPage()}
      >
        {!isHomePage && (
          <Link to="/browser">
            <BrowserButton
              className={
                isBrowserPage
                  ? "border-4 border-green-700"
                  : "border-2 border-black"
              }
            />
          </Link>
        )}
        {!isHomePage && (
          <Link to="/games">
            <GamesButton
              className={
                isGamesPage
                  ? "border-4 border-green-700"
                  : "border-2 border-black"
              }
            />
          </Link>
        )}
        <Link to="/settings">
          <SettingsButton
            className={
              isSettingsPage
                ? "border-4 border-green-700"
                : "border-2 border-black"
            }
          />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
