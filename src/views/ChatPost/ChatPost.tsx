import React from 'react';
import { Checkbox, Box, Stack } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { ChatPostProps } from './ChatPost.interfaces';

const ChatPost = ({ email, name, img, change, checked = false, id }: ChatPostProps) => {
  const onCheckBoxClick = (event: any) => {
    change(event.target.checked, Number(event.target.id));
  };

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
        onChange={onCheckBoxClick}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </Stack>
  );
};

export default ChatPost;
