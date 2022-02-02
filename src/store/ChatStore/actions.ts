import { Types } from '../types';

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
