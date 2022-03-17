import { Types } from '../types';

export const reducer = (
  state = {},
  action: { type: string; canvasRef: HTMLCanvasElement | null }
) => {
  switch (action.type) {
    case Types.CANVAS:
      return {
        ...state,
        canvasRef: action.canvasRef,
      };
    default:
      return state;
  }
};
