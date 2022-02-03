import { Types } from '../types';

export const emailFilter = (images: any, users: any) => ({
  type: Types.EMAILFILTER,
  images: images,
  users: users,
});

export const loadImages = (data: any) => ({ type: Types.LOADIMAGES, images: data });

export const loadUsers = (data: any) => ({ type: Types.LOADUSERS, users: data });
