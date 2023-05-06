import { useState } from "react";
import { Play, Pause, FastForward } from "react-feather";
import { ProgressBar } from "react-bootstrap";
import { Image } from "daisyui";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  image: {
    width: "64px",
    height: "64px",
    marginRight: theme.spacing(2),
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
    minWidth: 0,
  },
  artist: {
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  song: {
    fontWeight: "normal",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

function MusicPlayer({ song, artist, image, duration, progress, onPlayPause, onFastForward }) {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    onPlayPause(!isPlaying);
  };

  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <Image src={image} rounded />
      </div>
      <div className={classes.info}>
        <div className={classes.artist}>{artist}</div>
        <div className={classes.song}>{song}</div>
      </div>
      <div>
        <Button onClick={togglePlayPause}>{isPlaying ? <Pause /> : <Play />}</Button>
        <Button onClick={onFastForward}>
          <FastForward />
        </Button>
      </div>
      <div>
        <ProgressBar now={progress} label={`${duration}s`} />
      </div>
    </div>
  );
}

export default MusicPlayer;