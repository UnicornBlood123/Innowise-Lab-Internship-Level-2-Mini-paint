import React from 'react';
import { Box, Stack } from '@mui/material';
import CanvasContainer from '../../Containers/Canvas/CanvasContainer';
import ToolsContainer from '../../Containers/Tools/ToolsContainer';
import ChatPostsContainer from '../../Containers/ChatPosts/ChatPostsContainer';

const Content = () => {
  return (
    <Stack direction="row" sx={{ margin: 'auto', marginTop: '0px' }}>
      <Box
        sx={{
          maxHeight: '873px',
          maxWidth: '320px',
          minHeight: '873px',
          minWidth: '320px',
          height: '873px',
          width: '320px',
          padding: '25px 5px 25px 5px',
        }}
      >
        <ChatPostsContainer />
      </Box>
      <Stack>
        <Box
          sx={{
            height: '87px',
            width: '800px',
            maxHeight: '87px',
            maxWidth: '800px',
            minHeight: '87px',
            minWidth: '800px',
            padding: '25px 5px 5px 5px',
          }}
        >
          <ToolsContainer />
        </Box>
        <Box
          sx={{
            maxHeight: '785px',
            maxWidth: '800px',
            minHeight: '785px',
            minWidth: '800px',
            height: '785px',
            width: '800px',
            padding: '5px 5px 25px 5px',
          }}
        >
          <CanvasContainer />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Content;
