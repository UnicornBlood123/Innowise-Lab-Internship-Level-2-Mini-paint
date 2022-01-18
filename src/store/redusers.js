import { toolReducer } from './toolReducer';
import { canvasReducer } from './canvasReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ tools: toolReducer, canvas: canvasReducer });
