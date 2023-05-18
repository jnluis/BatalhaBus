import { useEffect, useState } from "react";
import useSound from "use-sound";
import Music from "../../../assets/OLimpaChamines.mp3"
import { PlayArrow, Pause, FastForward } from '@mui/icons-material';
import "./MusicPlayer.css";
import jonyclaras from "../../../assets/jonyclaras.jpg"
import speakers from "../../../assets/speakers.svg"

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });

  const [seconds, setSeconds] = useState(0);

  const [play, { pause, duration, sound }] = useSound(Music);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

    // Helper function to add leading zeros to a number
    const addLeadingZero = (num) => {
      return num < 10 ? "0" + num : num.toString();
    }

  return (
    <div className="component">
      <img className="musicCover" src={jonyclaras} />
      <div>
        <div className="time">

           <p>
            {addLeadingZero(currTime.min)}:{addLeadingZero(currTime.sec)}
          </p>
          <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds ?? 0}
          className="timeline22"
          sytle={{zindex: 100}}
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
          />
          <p>
            {addLeadingZero(time.min)}:{addLeadingZero(time.sec)}
          </p>   
        </div >
        <div>
        <p className="subTitle">O Limpa Chaminés</p>
        <h3 className="title">João Claro</h3>
          <h6 className="Playing inline-flex">
            Playing in: <a style={{fontWeight:"Bold"}}> Speakers</a>
          <img className="icon" src={speakers} /> 
          </h6> 
      </div>
      </div>
      <div className="buttons">
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton} >
            <PlayArrow sx={{ color: "#191D23", fontSize: 27 }} />
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <Pause sx={{ color: "#191D23", fontSize: 27 }} />
          </button>
        )}
        <button className="FastForward">
          <FastForward sx={{ color: "#191D23", fontSize: 27 }} />
        </button>
      </div>
    </div>
  );
}

