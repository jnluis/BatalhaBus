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
        <div key={name} className=" text-white p-4 text-center">
          <a href={link} target="_blank" rel="noreferrer">
          {/* aqui é que se deveria meter a parte do botão ser só carregavel na imagem mesmo, mas o href tem de estar no <a>, então acho que não há outra maneira de fazer */}
            <img src={picture} alt={name}  className="mx-auto mb-2 h-36 mb-10 cursor-pointer" />
          </a>
          <span className="text-lg font-medium">{name}</span>
        </div>

      ))}
    </div>
  );
}

export default Media;
