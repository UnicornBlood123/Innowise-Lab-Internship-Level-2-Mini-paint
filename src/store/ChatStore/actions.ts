import { Types } from '../types';

export const emailFilter = (images: any) => ({
  type: Types.EMAILFILTER,
  images: images,
});

export const setImages = (data: any[]) => ({ type: Types.SETIMAGES, images: data, isLoad: false });
export const setUsers = (data: any[]) => ({ type: Types.SETUSERS, users: data, isLoad: false });

export const loadImages = () => ({ type: Types.LOADIMAGES, isLoad: true });
export const loadUsers = () => ({ type: Types.LOADUSERS, isLoad: true });
