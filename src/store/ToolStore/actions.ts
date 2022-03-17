import { Types } from '../types';

export const selectBrash = (tool: {}) => ({
  type: Types.BRASH,
  tool: tool,
  toolName: Types.BRASH,
});

export const selectRect = (tool: {}) => ({
  type: Types.RECT,
  tool: tool,
  toolName: Types.RECT,
});

export const selectLine = (tool: {}) => ({
  type: Types.LINE,
  tool: tool,
  toolName: Types.LINE,
});

export const selectCircle = (tool: {}) => ({
  type: Types.CIRCLE,
  tool: tool,
  toolName: Types.CIRCLE,
});
