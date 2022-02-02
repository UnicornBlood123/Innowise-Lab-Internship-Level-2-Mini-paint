import React from 'react';
import { TextField } from '@mui/material';
import { ChatFilterProps } from './ChatFilter.interfaces';

const ChatFilter = ({ emailFilter }: ChatFilterProps) => {
  const changeFilter = (e: any) => {
    emailFilter(e.target.value);
  };

  return (
    <TextField
      id={'email'}
      label={'Email filter'}
      type={'email'}
      size={'small'}
      sx={{ justifyContent: 'center' }}
      onChange={changeFilter}
    />
  );
};

export default ChatFilter;
