import { Types } from '../types';

const defaultState = {};

export const reducer = (state = defaultState, action: any) => {
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
