import React, { useEffect, useRef } from 'react';
import './Canvas.css';

const Canvas = ({ setRef }: { setRef(ref: any): void }) => {
  const canvasRef = useRef<any>();
  useEffect(() => {
    setRef(canvasRef.current);
  });
  return <canvas ref={canvasRef} width={790} height={755} />;
};

export default Canvas;
