import { chatInterface } from './ChatStore/interfaces';
import { canvasInterface } from './CanvasStore/interfaces';
import { toolInterface } from './ToolStore/interfaces';

export interface stateInterface {
  chat: chatInterface;
  canvas: canvasInterface;
  tools: toolInterface;
}
