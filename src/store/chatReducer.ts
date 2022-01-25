import { Types } from './types';

export const imageReducer = (state = {}, action: any) => {
  switch (action.type) {
    case Types.LOADIMAGES:
      return {
        ...state,
        allImages: action.images,
      };
    default:
      return state;
  }
};
