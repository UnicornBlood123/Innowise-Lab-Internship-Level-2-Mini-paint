import React, { useEffect, useRef } from 'react';
import './Canvas.css';
import { CanvasProps } from './Canvas.interfaces';

const Canvas = ({ setRef }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    setRef(canvasRef.current);
  });
  return <canvas ref={canvasRef} width={790} height={755} />;
};

export default Canvas;
