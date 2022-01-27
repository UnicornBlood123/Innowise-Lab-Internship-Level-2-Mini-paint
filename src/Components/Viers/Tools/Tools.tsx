import React from 'react';
import { Button } from '@mui/material';
import { Types } from '../../../store/types';
import { ToolsProps } from './Tools.interfaces';

const Tools = ({
  onBrushClick,
  onRectClick,
  toolActive,
  onChangeColor,
  onChangeLineWidth,
  onLineClick,
  onCircleClick,
  onSaveImageClick,
  onLoadImageClick,
  onClearCanvasClick,
}: ToolsProps) => {
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
      <label htmlFor="line-width">Width</label>
      <input
        id="line-width"
        type="number"
        min={1}
        max={50}
        defaultValue={1}
        onChange={(width) => onChangeLineWidth(width.target.value)}
      />
      <Button color="secondary" variant="outlined" onClick={onClearCanvasClick}>
        Clear
      </Button>
      <Button color="secondary" variant="outlined" onClick={() => onSaveImageClick('Save')}>
        Save
      </Button>
      <Button color="secondary" variant="outlined" onClick={() => onLoadImageClick('Load')}>
        Load
      </Button>
    </>
  );
};

export default Tools;
