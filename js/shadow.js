var rooms = [
    {
        name: "black",
        doors: [[174,362],[684,872],[1166,1354]]
    },
    {
        name: "yellow",
        doors: [[174,362],[684,872],[1166,1354]]
    },
    {
        name: "pink",
        doors: [[174,362],[684,872],[1166,1354]]
    },
    {
        name: "green",
        doors: [[174,362],[684,872],[1166,1354]]
    }
  ]
function Shadow (game, name, doors){
    this.game = game; 
    this.x = 400-40;
    this.y = 300-40;
    //this.x = game.canvas.width/2 - this.width;
    //this.y = game.canvas.height/2;
    this.width = 80;
    this.height = 80;
    this.name = name;
    this.doors = doors;
}

Shadow.prototype.drawShadow = function () {
    this.game.ctx.fillStyle = "orange";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

Shadow.prototype.checkCollisionDoor = function (name) {
    // console.log(this.x + this.game.player.x);
    return this.doors.some(function(door){
    //     console.log(door)
        return ( ( Math.abs(this.x + this.game.player.x) ) >= door[0] &&
        door[1] >= Math.abs(this.x + this.width + this.game.player.x)) ? true : false
    }.bind(this));

}; 


  Shadow.prototype.drawShadowOn = function () {
    this.game.ctx.fillStyle = "green";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  };
