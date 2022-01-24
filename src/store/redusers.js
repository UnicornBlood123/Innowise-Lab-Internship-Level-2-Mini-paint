import { toolReducer } from './toolReducer';
import { canvasReducer } from './canvasReducer';
import { combineReducers } from 'redux';
import { imageReducer } from './imageReducer';

export const rootReducer = combineReducers({
  tools: toolReducer,
  canvas: canvasReducer,
  images: imageReducer,
});
