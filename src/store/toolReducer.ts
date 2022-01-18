import { Types } from './types';

export const toolReducer = (state: any = { select: '' }, action: any) => {
  switch (action.type) {
    case Types.BRASH:
      return {
        ...state,
        select: Types.BRASH,
      };
    case Types.RECT:
      return {
        ...state,
        select: Types.RECT,
      };
    default:
      return state;
  }
};
