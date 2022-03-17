import React from 'react';
import { CircularProgress, Stack } from '@mui/material';
import ChatPost from '../ChatPost/ChatPost';
import { ChatPostsProps } from './ChatPosts.interfaces';
import { imageInterface } from '../../store/ChatStore/interfaces';

const ChatPosts = ({ isLoad, images = [], user = [{}], change }: ChatPostsProps) => {
  return isLoad ? (
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
      {images.map((image: imageInterface) => {
        return (
          <ChatPost
            key={Number(image?.id)}
            id={Number(image?.id)}
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
