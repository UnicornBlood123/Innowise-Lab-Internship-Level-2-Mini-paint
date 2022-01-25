import React from 'react';
import { CircularProgress, Stack } from '@mui/material';
import ChatPost from '../ChatPost/ChatPost';

const ChatPosts = ({ loadingImages, loadingUsers, images = [], user = [], change }: any) => {
  return loadingImages && loadingUsers ? (
    <CircularProgress sx={{ alignSelf: 'center' }} />
  ) : (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        gap: '10px',
        overflowX: 'auto',
      }}
    >
      {images.map((image: any) => {
        return (
          <ChatPost
            key={+image?.id}
            id={+image?.id}
            email={image.email}
            name={image.name}
            img={image.data}
            change={change}
            checked={user?.[0]?.[+image?.id]}
          />
        );
      })}
    </Stack>
  );
};

export default ChatPosts;
