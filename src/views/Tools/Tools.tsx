import React from 'react';
import { Button } from '@mui/material';
import { ToolsProps } from './Tools.interfaces';

const Tools = ({ onToolClick, toolActive, activeButtonsConfig }: ToolsProps) => {
  return (
    <>
      {activeButtonsConfig.map((tool: any, i: number) => (
        <Button
          key={i}
          color="secondary"
          variant={toolActive === tool.type ? 'contained' : 'outlined'}
          onClick={onToolClick.bind(null, tool.type)}
        >
          {tool.type}
        </Button>
      ))}

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
