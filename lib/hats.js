function Hats(canvas, ctx, x) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.hatImage = new Image();
  this.hatImage.src = "Galera.png";
  this.hatImage.isReady = false;
  this.hatImage.onload = (function() {
    this.hatImage.isReady = true;
  }).bind(this);
  this.x = x;
  this.y = -100;
  this.width = 200;
  this.height = 200;
  this.hatEstanArriba = true


}

Hats.prototype.goDown = function() {

  if (this.y < 300) {
    this.hatEstanArriba = true
    this.y += 10
    console.log(`This.y en go down vale ${this.y}`);
  } else {
    this.hatEstanArriba = false
  }
}

Hats.prototype.draw = function() {
  // console.log(`This.y en draw vale ${this.y}`);
  this.ctx.drawImage(
    this.hatImage,
    this.x,
    this.y,
    this.width,
    this.height,
  )
}
