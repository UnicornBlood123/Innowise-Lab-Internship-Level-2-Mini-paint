import React from 'react';
import { Grid } from '@mui/material';
import Chat from '../Chat/Chat';
import CanvasContainer from '../Canvas/CanvasContainer';
import ToolsContainer from '../Tools/ToolsContainer';

const Content = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: window.innerHeight - 64,
          width: window.innerWidth,
        }}
      >
        <Grid
          item
          xs={3}
          sx={{
            height: '100%',
            width: '100%',
            padding: '5px',
          }}
        >
          <Chat />
        </Grid>
        <Grid item container xs={9} sx={{ height: '100%', width: '100%' }}>
          <Grid item xs={12} sx={{ height: '10%', width: '100%', padding: '5px' }}>
            <ToolsContainer />
          </Grid>
          <Grid
            item
            container
            xs={12}
            sx={{
              height: '90%',
              width: '100%',
              justifyContent: 'center',
              padding: '5px',
            }}
          >
            <CanvasContainer />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
