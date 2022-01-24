import React from 'react';
import { Checkbox, Box, Stack } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const ChatPost = ({ email, name, img, chage, checked }: any) => {
  return (
    <Stack direction="row" sx={{ gap: '5px' }}>
      <img src={img} width="50" height="50" />
      <Stack sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>{email}</Box>
        <Box>{name}</Box>
      </Stack>
      <Checkbox
        checked={checked}
        onChange={chage}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </Stack>
  );
};

export default ChatPost;
