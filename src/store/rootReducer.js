import { combineReducers } from 'redux';
import { reducer as toolReducer } from './ToolStore/reducer';
import { reducer as canvasReducer } from './CanvasStore/reducer';
import { reducer as chatReducer } from './ChatStore/reducer';

export const rootReducer = combineReducers({
  tools: toolReducer,
  canvas: canvasReducer,
  chat: chatReducer,
});
