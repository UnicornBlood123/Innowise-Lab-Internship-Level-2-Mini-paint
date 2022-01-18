import React from 'react';
import { Button } from '@mui/material';

const Tools = ({ onBrushClick, onRectClick }: any) => {
  return (
    <>
      <Button color="secondary" variant="contained" onClick={onBrushClick}>
        Brash
      </Button>
      <Button color="secondary" variant="contained" onClick={onRectClick}>
        Rect
      </Button>
    </>
  );
};

export default Tools;
