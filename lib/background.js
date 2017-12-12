function Background (canvas, ctx){
  this.canvas = canvas;
  this.ctx = ctx;
  this.backgroundImage = new Image();
  this.backgroundImage.src = "background.jpg";
  this.backgroundImage.isReady = false;
  this.backgroundImage.onload = (function() {
    this.backgroundImage.isReady = true;
  }).bind(this);
  this.x = 0;
  this.y = 0;
  this.width = 1000;
  this.height = 700;
}

Background.prototype.draw = function() {
    this.ctx.drawImage(
      this.backgroundImage,
      this.x,
      this.y,
      this.width,
      this.height
    )
}
