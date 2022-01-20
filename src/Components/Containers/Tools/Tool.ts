export default class Tool {
  mouseDown = false;
  x = 0;
  y = 0;
  ctx: any;
  canvas: any;
  constructor(canvas: any) {
    this.canvas = canvas;
    this.ctx = canvas?.getContext('2d');
    this.destroyEvents();
  }
  set strokeColor(color: any) {
    this.ctx.strokeStyle = color;
  }
  set fillColor(color: string) {
    this.ctx.fillStyle = color;
  }
  set lineWidth(width: number) {
    this.ctx.lineWidth = width;
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}
