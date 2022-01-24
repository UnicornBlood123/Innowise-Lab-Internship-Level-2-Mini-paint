import React from 'react';
import { CircularProgress, Stack } from '@mui/material';
import ChatPost from '../ChatPost/ChatPost';

const ChatPosts = ({ loading, images }: any) => {
  return loading ? (
    <CircularProgress sx={{ alignSelf: 'center' }} />
  ) : (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        border: '1px solid black',
        padding: '10px',
        gap: '10px',
        overflowX: 'auto',
      }}
    >
      {images.map((image: any, i: number) => {
        return (
          <ChatPost key={i} email={image.email} name={image.name} img={image.data} change checked />
        );
      })}
    </Stack>
  );
};

export default ChatPosts;
