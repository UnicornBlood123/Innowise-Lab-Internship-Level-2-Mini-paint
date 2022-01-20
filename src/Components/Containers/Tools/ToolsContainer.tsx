import React from 'react';
import Tools from '../../Viers/Tools/Tools';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrash, selectRect } from '../../../store/actions';
import { Box } from '@mui/material';
import Brash from './Brash';
import Rect from './Rect';

const ToolsContainer = () => {
  const dispatch = useDispatch();
  const canvas = useSelector((state: any) => state.canvas);
  const tools = useSelector((state: any) => state.tools);

  const brushButtonClick = () => {
    dispatch(selectBrash(new Brash(canvas.canvasRef)));
  };

  const rectButtonClick = () => {
    dispatch(selectRect(new Rect(canvas.canvasRef)));
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        border: '1px solid black',
        display: 'flex',
        alignContent: 'center',
        padding: '15px',
        gap: '10px',
      }}
    >
      <Tools
        onBrushClick={brushButtonClick}
        onRectClick={rectButtonClick}
        toolActive={tools.toolName}
      />
    </Box>
  );
};

export default ToolsContainer;
