import React from 'react';
import { TextField } from '@mui/material';
import { ChatFilterProps } from './ChatFilter.interfaces';

const ChatFilter = ({ filter, setFilter }: ChatFilterProps) => {
  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <TextField
      id={'email'}
      label={'Email filter'}
      type={'email'}
      size={'small'}
      sx={{ justifyContent: 'center' }}
      value={filter}
      onChange={changeFilter}
    />
  );
};

export default ChatFilter;
