import React, { useState, useEffect } from "react";

import JogoGalo from "../../assets/JogoGalo.svg";
import CutTheRope from "../../assets/CutTheRope.svg";
import Chess from "../../assets/Chess.svg";
import CarRacing from "../../assets/CarRacing.svg";





const socialLinks = {
  "Jogo do Galo": [" ", JogoGalo ],
  "Cut the Rope": [" ", CutTheRope],
  "Chess": [" ", Chess],
  "Car Racing": [" ", CarRacing]
};

function Games() {
  return (
    <>
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
    
  </>
  );
}

export default Games;


