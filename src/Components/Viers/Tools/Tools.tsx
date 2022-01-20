import React from 'react';
import { Button } from '@mui/material';
import { Types } from '../../../store/types';

const Tools = ({ onBrushClick, onRectClick, toolActive }: any) => {
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
        variant={toolActive === Types.RECT ? 'contained' : 'outlined'}
        onClick={onRectClick}
      >
        Rect
      </Button>
    </>
  );
};

export default Tools;
