import { Types } from '../types';

export const setCanvas = (canvas: any) => ({
  type: Types.CANVAS,
  canvasRef: canvas,
});
