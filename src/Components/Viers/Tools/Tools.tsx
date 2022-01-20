import React from 'react';
import { Button, Stack } from '@mui/material';
import { Types } from '../../../store/types';

const Tools = ({
  onBrushClick,
  onRectClick,
  toolActive,
  onChangeColor,
  onChangeLineWidth,
  onLineClick,
  onCircleClick,
}: any) => {
  return (
    <>
      <Button
        color="secondary"
        variant={toolActive === Types.BRASH ? 'contained' : 'outlined'}
        onClick={onBrushClick}
      >
        Brash
      </Button>
      <Button
        color="secondary"
        variant={toolActive === Types.LINE ? 'contained' : 'outlined'}
        onClick={onLineClick}
      >
        Line
      </Button>
      <Button
        color="secondary"
        variant={toolActive === Types.RECT ? 'contained' : 'outlined'}
        onClick={onRectClick}
      >
        Rect
      </Button>
      <Button
        color="secondary"
        variant={toolActive === Types.CIRCLE ? 'contained' : 'outlined'}
        onClick={onCircleClick}
      >
        Circle
      </Button>
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="color"
        defaultValue={'black'}
        onChange={(color) => onChangeColor(color.target.value)}
      />
      <label htmlFor="line-width">line width</label>
      <input
        id="line-width"
        type="number"
        min={1}
        max={50}
        defaultValue={1}
        onChange={(width) => onChangeLineWidth(width.target.value)}
      />
    </>
  );
};

export default Tools;
