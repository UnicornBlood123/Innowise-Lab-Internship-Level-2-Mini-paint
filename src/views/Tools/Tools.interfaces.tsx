import { ChangeEvent } from 'react';

export interface ToolsProps {
  onToolClick: (inputType: string, e: any) => void;
  toolActive: string;
  activeButtonsConfig: { type: string }[];
}
