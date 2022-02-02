import React from 'react';
import { Button } from '@mui/material';
import { Types } from '../../store/types';
import { ToolsProps } from './Tools.interfaces';

const Tools = ({ onToolClick, toolActive }: ToolsProps) => {
  return (
    <>
      <Button
        color="secondary"
        variant={toolActive === Types.BRASH ? 'contained' : 'outlined'}
        onClick={onToolClick.bind(null, Types.BRASH)}
      >
        Brash
      </Button>
      <Button
        color="secondary"
        variant={toolActive === Types.LINE ? 'contained' : 'outlined'}
        onClick={onToolClick.bind(null, Types.LINE)}
      >
        Line
      </Button>
      <Button
        color="secondary"
        variant={toolActive === Types.RECT ? 'contained' : 'outlined'}
        onClick={onToolClick.bind(null, Types.RECT)}
      >
        Rect
      </Button>
      <Button
        color="secondary"
        variant={toolActive === Types.CIRCLE ? 'contained' : 'outlined'}
        onClick={onToolClick.bind(null, Types.CIRCLE)}
      >
        Circle
      </Button>
      <Button color="secondary" variant="outlined" onClick={onToolClick.bind(null, 'CLEAR')}>
        Clear
      </Button>
      <Button color="secondary" variant="outlined" onClick={onToolClick.bind(null, 'SAVE')}>
        Save
      </Button>
      <Button color="secondary" variant="outlined" onClick={onToolClick.bind(null, 'LOAD')}>
        Load
      </Button>
      <label htmlFor="line-width">Width</label>
      <input
        id="line-width"
        type="number"
        min={1}
        max={50}
        defaultValue={1}
        onChange={onToolClick.bind(null, 'WIDTH')}
      />
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="color"
        defaultValue={'black'}
        onChange={onToolClick.bind(null, 'COLOR')}
      />
    </>
  );
};

export default Tools;
