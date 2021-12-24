import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@material-ui/core";
import styles from '../styles/Player.module.scss';
import {ITrack} from "../types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
  const track: ITrack = {_id: '1', name: 'Classic mus', artist: 'Ansamble', text: 'There is no text in classic music', listens: 12, audio: 'http://127.0.0.1:5000/audio/classic.mp3', picture: 'http://127.0.0.1:5000/image/classic.jpg', comments: []};

  const active = false;
  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <Grid container direction="column">
        <div>{track.name}</div>
        <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{marginLeft: 'auto'}}/>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;