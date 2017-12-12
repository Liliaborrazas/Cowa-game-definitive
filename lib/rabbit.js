function Rabbit (canvas, ctx){
  this.canvas = canvas;
  this.ctx = ctx;
  this.rabbitImage = new Image();
  this.rabbitImage.src = "conejo.png";
  this.rabbitImage.isReady = false;
  this.rabbitImage.onload = (function() {
    this.rabbitImage.isReady = true;
  }).bind(this);
  this.y = 350;
  this.width = 150;
  this.height = 150;
  this.rabbitPositions = [200, 450, 700]
  this.randomPosition = Math.floor(Math.random() * 3)
  this.x = this.rabbitPositions[this.randomPosition]
}

Rabbit.prototype.draw = function() {
    this.ctx.drawImage(
      this.rabbitImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
}

Rabbit.prototype.draw1 = function() {
    this.ctx.drawImage(
      this.rabbitImage,
      200,
      this.y,
      this.width,
      this.height
    );
}

Rabbit.prototype.draw2 = function() {
    this.ctx.drawImage(
      this.rabbitImage,
      450,
      this.y,
      this.width,
      this.height
    );
}

Rabbit.prototype.draw3 = function() {
    this.ctx.drawImage(
      this.rabbitImage,
      700,
      this.y,
      this.width,
      this.height
    );
}
