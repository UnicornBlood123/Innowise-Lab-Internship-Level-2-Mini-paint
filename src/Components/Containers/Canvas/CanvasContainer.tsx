import React, { useEffect } from 'react';
import '../../Viers/Canvas/Canvas.css';
import { useDispatch } from 'react-redux';
import Canvas from '../../Viers/Canvas/Canvas';
import { selectBrash, setCanvas } from '../../../store/actions';
import Brash from '../Tools/Brash';

const CanvasContainer = () => {
  let canvasRef: any;
  const setRef = (ref: any): void => {
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
