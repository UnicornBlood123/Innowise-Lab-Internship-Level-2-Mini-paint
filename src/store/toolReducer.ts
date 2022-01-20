import { Types } from './types';

export const toolReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case Types.BRASH:
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
    default:
      return state;
  }
};
