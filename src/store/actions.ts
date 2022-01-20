import { Types } from './types';

export const selectBrash = (tool: any) => ({
  type: Types.BRASH,
  tool: tool,
  toolName: Types.BRASH,
});

export const selectRect = (tool: any) => ({
  type: Types.RECT,
  tool: tool,
  toolName: Types.RECT,
});

export const setCanvas = (canvas: any) => ({
  type: Types.CANVAS,
  canvasRef: canvas,
});
