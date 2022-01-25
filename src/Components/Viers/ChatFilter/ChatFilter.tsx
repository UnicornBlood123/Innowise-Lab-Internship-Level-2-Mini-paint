import React from 'react';
import { Stack, Box } from '@mui/material';

const ChatFilter = () => {
  return (
    <Stack
      direction="row"
      sx={{ gap: '5px', boxShadow: '-1px -1px 3px rgb(0 0 0 / 24%) inset', padding: '5px' }}
    ></Stack>
  );
};

export default ChatFilter;
