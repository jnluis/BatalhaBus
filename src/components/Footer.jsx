import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "../index.css";
import HomeButton from "./FooterComponents/HomeButton";
import TripDetailsButton from "./FooterComponents/TripDetailsButton";
import MediaButton from "./FooterComponents/MediaButton";
import BrowserButton from "./FooterComponents/BrowserButton";
import GamesButton from "./FooterComponents/GamesButton";
import SettingsButton from "./FooterComponents/SettingsButton";
import MusicPlayer from "../pages/home/components/MusicPlayer.jsx"



function Navbar() {

  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/';

  const isTripDetailsPage = location.pathname === '/trip-details';
  const isMediaPage = location.pathname === '/media';
  const isBrowserPage = location.pathname === '/browser';
  const isGamesPage = location.pathname === '/games';
  const isSettingsPage = location.pathname === '/settings';

  return (
    <nav className="grid grid-cols-5 fixed bottom-0 w-full shadow-lg flex items-center pb-10">
      <Link to="/"> 
      <HomeButton className={isHomePage ? "border-4 border-green-700" : ""}/>
      </Link>
      {!isHomePage && (
        <Link to="/trip-details"> 
          <TripDetailsButton className={isTripDetailsPage ? 'border-4 border-green-700' : 'border-2 border-black'}/>
        </Link>
      )}
      {!isHomePage && (
        <Link to="/media"> 
          <MediaButton className={isMediaPage ? 'border-4 border-green-700' : 'border-2 border-black'}/>
        </Link>
      )}
      {!isHomePage && (
        <Link to="/browser"> 
          <BrowserButton className={isBrowserPage ? 'border-4 border-green-700' : ''} />
        </Link>
      )}
      {isHomePage && (
        <MusicPlayer />
      )}
      {!isHomePage && (
        <Link to="/games"> 
          <GamesButton />
        </Link>
      )}
      <Link to="/settings">
      <SettingsButton className={isSettingsPage ? 'border-4 border-green-700' : ''} />
      </Link>

    </nav>
  );
}

export default Navbar;
