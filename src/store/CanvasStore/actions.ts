import { Types } from '../types';

export const setCanvas = (canvas: HTMLCanvasElement | null) => ({
  type: Types.CANVAS,
  canvasRef: canvas,
});
