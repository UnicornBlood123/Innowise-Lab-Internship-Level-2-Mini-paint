import { Types } from '../types';

export const reducer = (
  state = { isLoad: true, filterImages: [] },
  action: { type: string; images: []; users: []; isLoad: boolean }
) => {
  switch (action.type) {
    case Types.SETIMAGES:
      return {
        ...state,
        images: action.images,
        isLoad: action.isLoad,
      };
    case Types.SETUSERS:
      return {
        ...state,
        users: action.users,
        isLoad: action.isLoad,
      };
    case Types.LOADIMAGES:
      return {
        ...state,
        isLoad: action.isLoad,
      };
    case Types.LOADUSERS:
      return {
        ...state,
        isLoad: action.isLoad,
      };
    case Types.EMAILFILTER:
      return {
        ...state,
        filterImages: action.images,
      };
    default:
      return state;
  }
};
