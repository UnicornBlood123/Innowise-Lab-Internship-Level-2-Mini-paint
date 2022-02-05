import { Types } from '../types';

export const emailFilter = (images: {}[]) => ({
  type: Types.EMAILFILTER,
  images: images,
});

export const setImages = (data: {}[]) => ({ type: Types.SETIMAGES, images: data, isLoad: false });
export const setUsers = (data: {}[]) => ({ type: Types.SETUSERS, users: data, isLoad: false });

export const loadImages = () => ({ type: Types.LOADIMAGES, isLoad: true });
export const loadUsers = () => ({ type: Types.LOADUSERS, isLoad: true });
