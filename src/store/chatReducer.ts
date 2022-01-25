import { Types } from './types';

export const chatReducer = (state = {}, action: any) => {
  switch (action.type) {
    case Types.LOADIMAGES:
      return {
        ...state,
        images: action.images,
      };
    case Types.LOADUSERS:
      return {
        ...state,
        users: action.users,
      };
    case Types.EMAILFILTER:
      return {
        ...state,
        images: action.images,
        users: action.users,
      };
    default:
      return state;
  }
};
