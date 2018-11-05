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

Player.prototype.checkCollisionDoor = function () {
  //return true si hay colisión con la puerta
  //return this.obstacles.some(function(obstacle) {
  //   return (
  //     (this.x + 3) >= 400 &&
  //      430 >= this.x &&
  //      (this.y+3) >= 297 &&
  //     327 >=this.y

  //   );
  // }.bind(this));
  if ((this.x + 3) >= 400 &&
  430 >= this.x &&
  (this.y+3) >= 297 &&
 327 >=this.y) return true
};

Player.prototype.setListeners = function () {
  document.onkeydown = function (event) {
    event.preventDefault();

    switch (event.keyCode) {
      // case TOP_KEY:
      // this.y -= this.v;
      //   //if (this.y > this.game.room.topLimit || this.checkCollisionDoor()) this.y -= this.v;
      //   break;
      // case DOWN_KEY:
      //   if (this.y < this.game.room.downLimit) this.y += this.v;
      //   break;
      case LEFT_KEY:
        //if (this.x > this.game.room.leftLimit) this.x -= this.v;
        this.x -= this.v;
        if (this.x < this.game.canvas.width) this.x = 0;
        break;
      case RIGHT_KEY:
        //if (this.x < this.game.room.rightLimit) this.x += this.v;
        this.x += this.v;
        if (this.x < -this.game.canvas.width) this.x = 0;
        break;
    }
    
  }.bind(this);
};

Player.prototype.drawPlayer = function () {
  this.game.ctx.fillStyle = "orange";
  this.game.ctx.fillRect(this.x, this.y, 3, 3);
};