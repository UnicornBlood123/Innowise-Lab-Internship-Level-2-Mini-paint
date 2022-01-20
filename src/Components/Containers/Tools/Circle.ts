import Tool from './Tool';

export default class Circle extends Tool {
  w = 0;
  h = 0;
  r = 0;
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
      this.r = Math.sqrt(this.w ** 2 + this.h ** 2);
      this.draw(this.startX, this.startY, this.r);
    }
  }

  draw(x: number, y: number, r: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.arc(x, y, r, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.stroke();
    };
  }
}
