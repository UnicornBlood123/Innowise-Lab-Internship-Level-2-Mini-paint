import React, { useEffect } from 'react';
import '../../views/Canvas/Canvas.css';
import { useDispatch } from 'react-redux';
import Canvas from '../../views/Canvas/Canvas';
import { selectBrash } from '../../store/ToolStore/actions';
import Brash from '../Tools/Brash';
import { setCanvas } from '../../store/CanvasStore/actions';

const CanvasContainer = () => {
  let canvasRef: HTMLCanvasElement | null;
  const setRef = (ref: HTMLCanvasElement | null): void => {
    canvasRef = ref;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCanvas(canvasRef));
    dispatch(selectBrash(new Brash(canvasRef)));
  }, []);

  return <Canvas setRef={setRef} />;
};

export default CanvasContainer;
