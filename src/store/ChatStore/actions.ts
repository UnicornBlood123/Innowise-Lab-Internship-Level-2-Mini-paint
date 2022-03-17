import { Types } from '../types';
import { imageInterface } from './interfaces';

export const emailFilter = (images: imageInterface[]) => ({
  type: Types.EMAILFILTER,
  images: images,
});

export const setImages = (data: {}[]) => ({ type: Types.SETIMAGES, images: data, isLoad: false });
export const setUsers = (data: {}[]) => ({ type: Types.SETUSERS, users: data, isLoad: false });

export const loadImages = () => ({ type: Types.LOADIMAGES, isLoad: true });
