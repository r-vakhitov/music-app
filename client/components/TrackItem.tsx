import React from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@material-ui/core";
import styles from '../styles/TrackItem.module.scss';
import {PlayArrow, Pause, Delete} from "@material-ui/icons";
import {useRouter} from "next/router";
import useActions from "../hooks/useActions";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active= false}) => {
  const router = useRouter();
  const {pauseTrack, playTrack, setActiveTrack} = useActions();
  const play = (e) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  }
  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/'+track._id)}>
      <IconButton onClick={play}>
        {active
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <img width={70} height={70} src={'http://127.0.0.1:5000/' + track.picture} style={{width: 200, margin:'0 20px'}}/>
      <Grid container direction="column">
        <div>{track.name}</div>
        <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton onClick={(e) => e.stopPropagation()} style={{marginLeft: 'auto'}}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;