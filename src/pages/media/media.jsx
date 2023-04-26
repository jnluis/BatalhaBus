import React, { Component } from "react";

class Media extends Component {
  socialLinks = {
    Discord: ["https://discord.gg", "https://picsum.photos/40"],
    Facebook: ["https://www.facebook.com", "https://picsum.photos/40"],
    Reddit: ["https://www.reddit.com", "https://picsum.photos/40"],
    YouTube: ["https://www.youtube.com", "https://picsum.photos/40"],
    Twitch: ["https://www.twitch.tv", "https://picsum.photos/40"],
    Instagram: ["https://www.instagram.com", "https://picsum.photos/40"],
    Spotify: ["https://open.spotify.com", "https://picsum.photos/40"],
    WhatsApp: ["https://chat.whatsapp.com", "https://picsum.photos/40"],
  };

  render() {
    return Object.entries(this.socialLinks).map(([name, [link, picture]]) => (
      <a key={name} href={link} target="_blank" rel="noreferrer">
        <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
          <img src={picture} alt={name} className="mx-auto mb-2" />
          <span className="text-lg font-medium">{name}</span>
        </div>
      </a>
    ));
  }
}

export default Media;
