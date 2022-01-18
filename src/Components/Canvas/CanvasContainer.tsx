import React, { useEffect } from 'react';
import './Canvas.css';
import { Types } from '../../store/types';
import Canvas from './Canvas';
import Brash from '../../Tools/Brash';
import { useSelector } from 'react-redux';
import Rect from '../../Tools/Rect';

const CanvasContainer = () => {
  let canvasRef: any;
  const setRef = (ref: any): void => {
    canvasRef = ref;
  };
  const tool = useSelector((state: any) => state.tools);

  useEffect(() => {
    switch (tool.select) {
      case Types.BRASH:
        new Brash(canvasRef);
        break;
      case Types.RECT:
        new Rect(canvasRef);
        break;
    }
  }, [tool]);

  return <Canvas setRef={setRef} />;
};

export default CanvasContainer;
