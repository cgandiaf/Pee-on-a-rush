

function Game() {
  this.canvas = document.querySelector("canvas")
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.player = new Player(this);
  this.room = new Room(this);
  this.shadow = new Shadow(this, rooms[0].name, rooms[0].doors);
  
  this.framesCounter = 0;
  this.score = 0;
  this.deathTime = 180; //segundos
}
Game.prototype.start = function () {

  this.interval = setInterval(function () {
    
    this.clear();
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.room.drawRoom();
    //this.room.drawDoor();
    //this.shadow.drawShadow();
    (this.shadow.checkCollisionDoor("black")) ? this.shadow.drawShadowOn() : this.shadow.drawShadow();
//     console.log(this.shadow.checkCollisionDoor("black"));
// if (this.shadow.checkCollisionDoor("black")){
//   console.log("verde");
//   this.shadow.drawShadowOn();
// } else {
//   console.log("naranjichiii");
//   this.shadow.drawShadow();
// } 
    //   this.room.drawDoor();

    //   //muevo
    //   //pinto
    //   this.framesCounter++;

    //   // controlamos que frameCounter no sea superior a 1000
    //   if (this.framesCounter > 1000) {
    //     this.framesCounter = 0;
    //   }

    //   controlamos la velocidad de generación de obstáculos
    //   if (this.framesCounter % 50 === 0) {
    //     this.ctx.fillStyle = "red";
    //     this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    //     //this.generateObstacle();
    //   }


  }.bind(this), 1000 / this.fps);
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};




