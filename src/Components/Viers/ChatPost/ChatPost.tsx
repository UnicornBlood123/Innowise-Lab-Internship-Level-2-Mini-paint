import React, { useState } from 'react';
import { Checkbox, Box, Stack } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const ChatPost = ({ email, name, img, change, checked = false, id }: any) => {
  return (
    <Stack
      direction="row"
      sx={{ gap: '5px', boxShadow: '-1px -1px 3px rgb(0 0 0 / 24%) inset', padding: '5px' }}
    >
      <Box sx={{ border: '1px solid #c1bfbf' }}>
        <img src={img} width="45" height="45" alt={'img'} />
      </Box>
      <Stack sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>{email}</Box>
        <Box>{name}</Box>
      </Stack>
      <Checkbox
        id={id.toString()}
        checked={checked}
        onChange={(event: any) => {
          change(event.target.checked, +event.target.id);
        }}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </Stack>
  );
};

export default ChatPost;
