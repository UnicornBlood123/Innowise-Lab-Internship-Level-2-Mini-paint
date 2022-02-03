import { Types } from '../types';

const defaultState = {};

export const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case Types.BRASH:
      return {
        ...state,
        selectTool: action.tool,
        toolName: action.toolName,
      };
    case Types.LINE:
      return {
        ...state,
        selectTool: action.tool,
        toolName: action.toolName,
      };
    case Types.RECT:
      return {
        ...state,
        selectTool: action.tool,
        toolName: action.toolName,
      };
    case Types.CIRCLE:
      return {
        ...state,
        selectTool: action.tool,
        toolName: action.toolName,
      };
    default:
      return state;
  }
};
