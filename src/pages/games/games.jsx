import React, { useState } from "react";
import JogoGalo from "../../assets/JogoGalo.svg";
import CutTheRope from "../../assets/CutTheRope.svg";
import Chess from "../../assets/Chess.svg";
import CarRacing from "../../assets/CarRacing.svg";
import Modal from "./components/modal.jsx";

const socialLinks = {
  "Jogo do Galo": [" ", JogoGalo],
  "Cut the Rope": [" ", CutTheRope],
  "Chess": [" ", Chess],
  "Car Racing": [" ", CarRacing]
};

function Games() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleClick = (name) => {
    if (name === "Jogo do Galo" || name === "Chess") {
      setIsModalOpen(true);
      setModalMessage("Jogo não disponível");
      setTimeout(() => setIsModalOpen(false), 1000);
    }
  };

  const gridStyle = {
    margin: 0,
    marginLeft: 19,
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={gridStyle}>
        {Object.entries(socialLinks).map(([name, [link, picture]]) => (
          <div
          key={name}
            className=" text-white p-4 text-center"
          >
            <img
              src={picture}
              alt={name} 
              onClick={() => handleClick(name)}
              className="mx-auto px-0 mb-2 h-36 cursor-pointer"
              style={gridStyle}
            />
            <span className="text-lg font-medium" style={{ marginRight: 89}}>{name}</span>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} message={modalMessage} />
    </>
  );
}

export default Games;
