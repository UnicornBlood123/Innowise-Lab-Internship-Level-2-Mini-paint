import Tool from './Tool';

export default class Brush extends Tool {
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
    this.x =
      e.clientX - e.target.offsetLeft + (document.querySelector('#boxContainer')?.scrollLeft ?? 0);
    this.y =
      e.clientY - e.target.offsetTop + (document.querySelector('#boxContainer')?.scrollTop ?? 0);
    this.ctx.moveTo(this.x, this.y);
  }
  mouseMoveHandler(e: any) {
    if (this.mouseDown) {
      this.x =
        e.clientX -
        e.target.offsetLeft +
        (document.querySelector('#boxContainer')?.scrollLeft ?? 0);
      this.y =
        e.clientY - e.target.offsetTop + (document.querySelector('#boxContainer')?.scrollTop ?? 0);
      this.draw(this.x, this.y);
    }
  }

  draw(x: number, y: number) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}
