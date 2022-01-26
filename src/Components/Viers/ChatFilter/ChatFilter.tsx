import React from 'react';
import { TextField } from '@mui/material';
import { ChatFilterProps } from './ChatFilter.interfaces';

const ChatFilter = ({ emailFilter }: ChatFilterProps) => {
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
