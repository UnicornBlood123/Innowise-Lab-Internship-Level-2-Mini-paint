export default class Tool {
  mouseDown = false;
  x = 0;
  y = 0;
  ctx: any;
  canvas: any;
  constructor(canvas: any) {
    this.canvas = canvas;
    this.ctx = this.canvas?.getContext('2d');
    this.destroyEvents();
  }
  set dataCanvas(dataImage: string) {
    if (dataImage) {
      const img = new Image();
      img.src = dataImage;
      img.onload = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      };
    }
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
