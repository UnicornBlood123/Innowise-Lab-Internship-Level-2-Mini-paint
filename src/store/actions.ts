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

export const selectLine = (tool: any) => ({
  type: Types.LINE,
  tool: tool,
  toolName: Types.LINE,
});

export const selectCircle = (tool: any) => ({
  type: Types.CIRCLE,
  tool: tool,
  toolName: Types.CIRCLE,
});

export const setCanvas = (canvas: any) => ({
  type: Types.CANVAS,
  canvasRef: canvas,
});

export const emailFilter = (images: any, users: any) => ({
  type: Types.EMAILFILTER,
  images: images,
  users: users,
});

export const loadImages = (loadImagesFromFirestore: any) => {
  return (dispatch: any) => {
    return loadImagesFromFirestore().then((data: any) =>
      dispatch({ type: Types.LOADIMAGES, images: data })
    );
  };
};

export const loadUsers = (loadUsersFromFirestore: any) => {
  return (dispatch: any) => {
    return loadUsersFromFirestore().then((data: any) =>
      dispatch({ type: Types.LOADUSERS, users: data })
    );
  };
};
