import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";
import Player from "../components/Player";

const MainLayout: React.FC = ({children}) => {
  return (
    <div>
      <Navbar />
      <Container style={{margin: '90px 0'}}>
        {children}
      </Container>
      <Player />
    </div>
  );
};

export default MainLayout;