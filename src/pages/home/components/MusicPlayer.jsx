import { useState } from "react";
import {PlayArrow, Pause, FastForward} from '@mui/icons-material';
import { Image } from "daisyui";
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

function MusicPlayer({ song, artist, image, duration, progress, onPlayPause, onFastForward }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    onPlayPause(!isPlaying);
  };

  return (
    <div >
      <div >
        <Image src={image} rounded />
      </div>
      <div >
        <div >{artist}</div>
        <div >{song}</div>
      </div>
      <div>
        <Button onClick={togglePlayPause}>{isPlaying ? <Pause /> : <PlayArrow />}</Button>
        <Button onClick={onFastForward}>
          <FastForward />
        </Button>
      </div>
      <div>
        <LinearProgress variant="determinate" value={progress} />
      </div>
      <div>{`${duration}s`}</div>
    </div>
  );
}

export default MusicPlayer;


