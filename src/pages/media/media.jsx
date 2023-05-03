import React from "react";
import discordLogo from "../../assets/discordLogo.svg";
import facebookLogo from "../../assets/FacebookLogo.svg";
import RedditLogo from "../../assets/RedditLogo.svg";
import YoutubeLogo from "../../assets/YouTubeLogo.svg";
import TwitchLogo from "../../assets/TwitchLogo.svg";
import InstagramLogo from "../../assets/InstagramLogo.svg";
import SpotifyLogo from "../../assets/SpotifyLogo.svg";
import WhatsappLogo from "../../assets/WhatsappLogo.svg";

const socialLinks = {
  Discord: ["https://discord.gg", discordLogo],
  Facebook: ["https://www.facebook.com", facebookLogo],
  Reddit: ["https://www.reddit.com", RedditLogo],
  YouTube: ["https://www.youtube.com", YoutubeLogo],
  Twitch: ["https://www.twitch.tv", TwitchLogo],
  Instagram: ["https://www.instagram.com", InstagramLogo],
  Spotify: ["https://open.spotify.com", SpotifyLogo],
  WhatsApp: ["https://chat.whatsapp.com", WhatsappLogo], 
};

function Media() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Object.entries(socialLinks).map(([name, [link, picture]]) => (
        <a key={name} href={link} target="_blank" rel="noreferrer">
          <div className=" text-white p-4 rounded-lg text-center">
            <img src={picture} alt={name} className="mx-auto mb-2 h-36 mb-10" />
            <span className="text-lg font-medium">{name}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Media;
