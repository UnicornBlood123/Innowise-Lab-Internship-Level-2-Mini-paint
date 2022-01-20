import { Types } from './types';

export const canvasReducer = (state = {}, action: any) => {
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
