import { toolReducer } from './toolReducer';
import { canvasReducer } from './canvasReducer';
import { combineReducers } from 'redux';
import { chatReducer } from './chatReducer';

export const rootReducer = combineReducers({
  tools: toolReducer,
  canvas: canvasReducer,
  chat: chatReducer,
});
