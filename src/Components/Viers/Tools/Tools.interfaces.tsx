export interface ToolsProps {
  onBrushClick: () => void;
  onRectClick: () => void;
  toolActive: string;
  onChangeColor: (color: string) => void;
  onChangeLineWidth: (width: string) => void;
  onLineClick: () => void;
  onCircleClick: () => void;
  onSaveImageClick: (name: string) => void;
  onLoadImageClick: (name: string) => void;
  onClearCanvasClick: () => void;
}
