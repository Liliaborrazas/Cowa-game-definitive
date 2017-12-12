function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = 1000;
  this.canvas.height = 700;
  this.ctx = this.canvas.getContext('2d');
  this.background = new Background(this.canvas, this.ctx);
  this.rabbit = new Rabbit(this.canvas, this.ctx);
  this.initialPositions = [150, 400, 650]
  this.hat1 = new Hats(this.canvas, this.ctx, this.initialPositions[0]);
  this.hat2 = new Hats(this.canvas, this.ctx, this.initialPositions[1]);
  this.hat3 = new Hats(this.canvas, this.ctx, this.initialPositions[2]);


  this.haPulsado1 = false;
  this.haPulsado2 = false;
  this.haPulsado3 = false;


  // this.hat1.canvasClickEvent();
  // this.hat2.canvasClickEvent();
  // this.hat3.canvasClickEvent();


  this.hat1HasTheRabbit = false
  this.hat2HasTheRabbit = false
  this.hat3HasTheRabbit = false
  this.hatsAlgunaVezAbajo = false;
  this.hatsSeHanMovidoUnaVez = false;
  this.hatsSeHanMovidoDosVeces = false;
  this.hatsSeHanMovidoTresVeces = false;
  this.hat2.hasMovedInTheThirdMovement = false;
  this.hat2.canMoveInThirdMovement = false;
  this.speed = 10

}


Game.prototype.drawRabbit = function() {
    this.rabbit.ctx.drawImage(
      this.rabbit.rabbitImage,
      50,
      50,
      150,
      150
    );
}



Game.prototype.hatMeetsRabit = function() {
  if (this.rabbit.x === 200) {
    this.hat1HasTheRabbit = true;
    console.log("Hat1 has the rabbit")
  } else if (this.rabbit.x === 450) {
    this.hat2HasTheRabbit = true
    console.log("Hat2 has the rabbit")
  } else if (this.rabbit.x === 700) {
    this.hat3HasTheRabbit = true
    console.log("Hat3 has the rabbit")
  }
}

Game.prototype.showsUpTheRabbit = function() {
  if (this.hat1HasTheRabbit === true){
    this.rabbit.x === 450
    this.rabbit.draw()
  }
  else if (this.hat2HasTheRabbit === true){
    this.rabbit.x === 200
    this.rabbit.draw()
  }
  else if (this.hat3HasTheRabbit === true){
    this.rabbit.x === 700
    this.rabbit.draw()
  }
}



Game.prototype.movement1 = function() {
  if (this.hat1.y > 50) {
    this.hat1.y -= (1 * this.speed)
  }
  if ((this.hat1.y === 50) && (this.hat1.x <= this.initialPositions[2])) {
    this.hat1.x += (1 * this.speed)
  }
  if ((this.hat1.x === this.initialPositions[2]) && (this.hat1.y < 300)) {
    this.hat1.y += (2 * this.speed)
    if (this.hat1.y === 300) {
      this.hatsSeHanMovidoUnaVez = true
    }
  }
  if (this.hat2.x > this.hat1.x) {
    this.hat2.x -= (1 * this.speed)
  }
  if (this.hat3.x > this.initialPositions[1]) {
    this.hat3.x -= (1 * this.speed)
  }
}

Game.prototype.movement2 = function() {
  if (this.hat2.y > 50) {
    this.hat2.y -= (1 * this.speed)
  }
  if ((this.hat2.y === 50) && (this.hat2.x <= this.initialPositions[2])) {
    this.hat2.x += (1 * this.speed)
  }
  if ((this.hat2.x === this.initialPositions[2]) && (this.hat2.y < 300)) {
    this.hat2.y += (2 * this.speed)
    if (this.hat2.y === 300) {
      this.hatsSeHanMovidoDosVeces = true;
    }
  }
  if (this.hat3.x > this.hat2.x) {
    this.hat3.x -= (1 * this.speed)
  }
  if (this.hat1.x > this.initialPositions[1]) {
    this.hat1.x -= (1 * this.speed)
  }
}

Game.prototype.movement3 = function() {
  if ((this.hat1.y > 50) && (this.hat2.hasMovedInTheThirdMovement === false)) {
    this.hat1.y -= (1 * this.speed)
    if (this.hat1.y === 50) {
      this.hat2.canMoveInThirdMovement = true
    }
  }
  if (this.hat2.canMoveInThirdMovement === true) {
    if (this.hat2.x > this.initialPositions[0]) {
      this.hat2.x -= (1 * this.speed)
      this.hat3.x += (1 * this.speed)
      if (this.hat2.x === this.initialPositions[0]) {
        this.hat2.hasMovedInTheThirdMovement = true
      }
    }
  }
  if ((this.hat2.hasMovedInTheThirdMovement === true) && (this.hat1.y < 300)) {
    this.hat1.y += (1 * this.speed)
  }



}

Game.prototype.checkIfDown = function() {
  if (this.hat1.hatEstanArriba === false) {
    this.hatsAlgunaVezAbajo = true
  }
}


Game.prototype.canvasClickEvent = function() {
  var that = this;
  this.canvas.addEventListener('click', function(event) {
    if (event.x > 150 && event.x < 350 && event.y > 300 && event.y < 500) {
        // alert("1");
        // myGame.hat2.y = 50;
        myGame.haPulsado1 = true;

    }

    if (event.x > 400 && event.x < 600 && event.y > 300 && event.y < 500) {
        // alert("1");
        // myGame.hat1.y = 50;
        myGame.haPulsado2 = true;

    }

    if (event.x > 650 && event.x < 850 && event.y > 300 && event.y < 500) {
        myGame.haPulsado3 = true;

    }
  })
}





Game.prototype.draw = function() {
  this.background.draw();


  if ((this.hat1.hatEstanArriba === true) &&
    (this.hatsAlgunaVezAbajo === false) &&
    (this.hatsSeHanMovidoUnaVez === false) &&
    (this.hatsSeHanMovidoDosVeces === false) &&
    (this.hatsSeHanMovidoTresVeces === false)) {
    this.rabbit.draw();
    this.hat1.goDown();
    this.hat2.goDown();
    this.hat3.goDown();
    this.hatMeetsRabit()
    this.hat1.draw();
    this.hat2.draw();
    this.hat3.draw();
    this.checkIfDown();

  } else if ((this.hatsAlgunaVezAbajo === true) &&
    (this.hatsSeHanMovidoUnaVez === false) &&
    (this.hatsSeHanMovidoDosVeces === false) &&
    (this.hatsSeHanMovidoTresVeces === false)) {
    this.hat1.draw();
    this.hat2.draw();
    this.hat3.draw();
    this.movement1();
  } else if ((this.hatsAlgunaVezAbajo === true) &&
    (this.hatsSeHanMovidoUnaVez === true) &&
    (this.hatsSeHanMovidoDosVeces === false) &&
    (this.hatsSeHanMovidoTresVeces === false)) {
    this.hat1.draw();
    this.hat2.draw();
    this.hat3.draw();
    this.movement2();
  } else if ((this.hatsAlgunaVezAbajo === true) &&
    (this.hatsSeHanMovidoUnaVez === true) &&
    (this.hatsSeHanMovidoDosVeces === true) &&
    (this.hatsSeHanMovidoTresVeces === false)) {
    this.hat1.draw();
    this.hat2.draw();
    this.hat3.draw();
    this.movement3();

  }


  if( this.haPulsado1 === true ) {
    if( this.hat2HasTheRabbit === true ) {
      this.rabbit.draw1();

    }
    this.hat2.y = 50;
  }
  if( this.haPulsado2 === true ) {
    if( this.hat1HasTheRabbit === true ) {
      this.rabbit.draw2();
    }
    this.hat1.y = 50;
  }
  if( this.haPulsado3 === true ) {
    if( this.hat3HasTheRabbit === true ) {
      this.rabbit.draw3();
    }
    this.hat3.y = 50;
  }

  window.requestAnimationFrame(this.draw.bind(this));

}
