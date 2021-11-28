import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {_id: '1', name: 'Classic mus', artist: 'Ansamble', text: 'There is no text in classic music', listens: 12, audio: 'http://127.0.0.1:5000/audio/classic.mp3', picture: 'http://127.0.0.1:5000/image/classic.jpg', comments: []},
    {_id: '2', name: 'Rap mus', artist: 'Nurminski', text: 'wub dub rap gap lab dap', listens: 122312, audio: 'http://127.0.0.1:5000/audio/rap.mp3', picture: 'http://127.0.0.1:5000/image/rap.jpg', comments: []},
    {_id: '3', name: 'Oldschool mus', artist: 'Hands up!', text: 'Kogda mi bili molodymi', listens: 919122, audio: 'http://127.0.0.1:5000/audio/oldschool.mp3', picture: 'http://127.0.0.1:5000/image/oldschool.jpg', comments: []},
  ]
  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{width: 900}}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index;