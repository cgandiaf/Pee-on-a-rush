function Game() {
  this.canvas = document.getElementById("canvas")
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;

  this.player = new Player(this);
  this.tutorial = new Tutorial(this); //la primera cargar la negra no sé como 
  this.shadow = new Shadow(this, rooms[0].name, rooms[0].doors);
  this.lifeBar = new LifeBar(this);
  this.key = new Key (this);
  this.time = 0; //reset
  this.totalTime = 100; // de momento no me hace falta
  this.score = 0;
  this.framesCounter = 0;
  this.mainOut++; //registro para comenzar con lifeBar
  this.gameState = "tutorial"
  this.deathTime = 180; //segundos
  this.lifeBar.drawLifeBar(this.time);
}
Game.prototype.start = function () {

  this.intervalID = setInterval(function () {

    this.framesCounter++;
    this.clear();

    if (this.gameState === "tutorial") {
      this.tutorial.showTutorial();
      //console.log(this.tutorial.checkCollisionDoor());
      (this.tutorial.checkCollisionDoor()) ? this.shadow.drawShadowOn() : this.shadow.drawShadow();
    } else {

      //Meter en una funcion Game draw()
      this.room.drawRoom();
      //Pintar la sombra dependiendo de la colisión con la puerta
      (typeof (this.shadow.checkCollisionDoor(this.room.roomId)) === "number") ? this.shadow.drawShadowOn() : this.shadow.drawShadow();
      
      //controlamos la velocidad de la lifeBar 
      if (this.framesCounter % 10 === 0) {
        this.time++;
        this.lifeBar.drawLifeBar(this.time);
        if (this.time === 100) {
          console.log(this.time);
          this.gameover = new GameOver(this);
        }
      }
      //Pintar la llave si la hay 
      if(this.room.hasKey()){
          this.key.drawKey();
      }

    }//Fin modo game

  }.bind(this), 1000 / this.fps);
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

//La llamo desde gameOver o desde youWin
Game.prototype.stop = function () {
  clearInterval(this.intervalID);
};



// Game.prototype.reset = function() {
//   this.background = new Background(this);
//   this.player = new Player(this);
//   this.framesCounter = 0;
//   this.obstacles = [];
//   this.score = 0;
// };


Game.prototype.youWin = function () {
  console.log("FIN: you win!")
  this.stop();
  this.clear();
  //this.ctx.beginPath();
  this.ctx.fillStyle = 'red';
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.font = "40px Arial";
  this.ctx.fillStyle = "green";
  this.ctx.textAlign = "center";
  this.ctx.fillText("WIIIIN!!!!", this.canvas.width / 2, 250);
  //
};






