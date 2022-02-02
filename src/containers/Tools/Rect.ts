import Tool from './Tool';

export default class Rect extends Tool {
  w = 0;
  h = 0;
  startX = 0;
  startY = 0;
  currentX = 0;
  currentY = 0;
  saved: any;

  constructor(canvas: any) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler(e: any) {
    this.mouseDown = false;
  }
  mouseDownHandler(e: any) {
    this.mouseDown = true;
    this.ctx.beginPath();
    this.startX =
      e.clientX -
      e.target.offsetLeft +
      e.target.scrollLeft +
      (document.querySelector('#boxContainer')?.scrollLeft ?? 0);
    this.startY =
      e.clientY -
      e.target.offsetTop +
      e.target.scrollTop +
      (document.querySelector('#boxContainer')?.scrollTop ?? 0);
    this.saved = this.canvas.toDataURL();
  }
  mouseMoveHandler(e: any) {
    if (this.mouseDown) {
      this.currentX =
        e.clientX -
        e.target.offsetLeft +
        e.target.scrollLeft +
        (document.querySelector('#boxContainer')?.scrollLeft ?? 0);
      this.currentY =
        e.clientY -
        e.target.offsetTop +
        e.target.scrollTop +
        (document.querySelector('#boxContainer')?.scrollTop ?? 0);
      this.w = this.currentX - this.startX;
      this.h = this.currentY - this.startY;
      this.draw(this.startX, this.startY, this.w, this.h);
    }
  }

  draw(x: number, y: number, w: number, h: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.rect(x, y, w, h);
      this.ctx.stroke();
      this.ctx.fill();
    };
  }
}
