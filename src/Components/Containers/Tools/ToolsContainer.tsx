import React from 'react';
import Tools from '../../Viers/Tools/Tools';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrash, selectCircle, selectLine, selectRect } from '../../../store/actions';
import { Box } from '@mui/material';
import Brash from './Brash';
import Rect from './Rect';
import Line from './Line';
import Circle from './Circle';

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

  const lineButtonClick = () => {
    dispatch(selectLine(new Line(canvas.canvasRef)));
  };

  const circleButtonClick = () => {
    dispatch(selectCircle(new Circle(canvas.canvasRef)));
  };

  const changeColorClick = (color: string) => {
    tools.selectTool.strokeColor = color;
    tools.selectTool.fillColor = color;
  };

  const changeLineWidthClick = (width: number) => {
    tools.selectTool.lineWidth = width;
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
        alignItems: 'center',
        padding: '15px',
        gap: '10px',
      }}
    >
      <Tools
        onBrushClick={brushButtonClick}
        onRectClick={rectButtonClick}
        toolActive={tools.toolName}
        onChangeColor={changeColorClick}
        onChangeLineWidth={changeLineWidthClick}
        onLineClick={lineButtonClick}
        onCircleClick={circleButtonClick}
      />
    </Box>
  );
};

export default ToolsContainer;
