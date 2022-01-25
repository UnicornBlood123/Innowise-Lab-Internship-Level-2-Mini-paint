import React from 'react';
import { TextField } from '@mui/material';

const ChatFilter = ({ emailFilter }: any) => {
  return (
    <TextField
      id={'email'}
      label={'Email filter'}
      type={'email'}
      size={'small'}
      sx={{ justifyContent: 'center' }}
      onChange={(e: any) => emailFilter(e.target.value)}
    />
  );
};

export default ChatFilter;
