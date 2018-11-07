var TOP_KEY = 38;
var DOWN_KEY = 40;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var SPACE = 32;



function Player(game) {
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.v = 30;
  //this.vx = 0;
  this.setListeners();
  //w = 3
  //h = 3

};



Player.prototype.setListeners = function () {
  document.onkeydown = function (event) {
    event.preventDefault();

    switch (event.keyCode) {
      case TOP_KEY:
      console.log(this.game.gameState);
      //console.log()
      if (this.game.gameState === "tutorial" && this.game.tutorial.checkCollisionDoor()){
        //Activamos modo juego e instanciamos room
        this.game.gameState = "game"
        this.game.room = new Room(this.game);
      }else{
      var doorNumber = this.game.shadow.checkCollisionDoor(this.game.room.roomId) ;
      //console.log(doorNumber);
       if(typeof(doorNumber) === "number")  {
        this.game.room.roomChange(doorNumber);}
       if (this.game.room.roomId === "wc") {
          this.game.youWin();
       }
      }
        // this.y -= this.v;
        //if (this.game.shadow.checkCollisionDoor(this.game.room.roomId)) this.game.room.roomGeneration(roomId, doorNumber);
        //   break;
        // case DOWN_KEY:
        //   if (this.y < this.game.room.downLimit) this.y += this.v;
        break;
      case LEFT_KEY:
        //if (this.x > this.game.room.leftLimit) this.x -= this.v;
        this.x -= this.v;
        if (this.x < -1500) this.x = 0;
        break;
      case RIGHT_KEY:
        //if (this.x < this.game.room.rightLimit) this.x += this.v;
        this.x += this.v;
        if (this.x > 1500) this.x = 0;
        break;
    }

  }.bind(this);
};

