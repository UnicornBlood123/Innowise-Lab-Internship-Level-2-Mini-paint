import React from 'react';
import Tools from './Tools';
import { useDispatch } from 'react-redux';
import { selectBrash, selectRect } from '../../store/actions';
import { Box } from '@mui/material';

const ToolsContainer = () => {
  const dispatch = useDispatch();

  const brushButtonClick = () => {
    dispatch(selectBrash());
  };

  const rectButtonClick = () => {
    dispatch(selectRect());
  };
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        border: '1px solid black',
        display: 'flex',
        gap: '5px',
        padding: '15px',
      }}
    >
      <Tools onBrushClick={brushButtonClick} onRectClick={rectButtonClick} />
    </Box>
  );
};

export default ToolsContainer;
