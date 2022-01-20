export default class Tool {
  mouseDown = false;
  x = 0;
  y = 0;
  ctx: any;
  canvas: any;
  constructor(canvas: any) {
    this.canvas = canvas;
    this.ctx = canvas?.getContext('2d');
  }
}
