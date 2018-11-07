function Shadow(game, name, doors) {
    this.game = game;
    this.x = 400 - 40;
    this.y = 300 - 40;
    //this.x = game.canvas.width/2 - this.width;
    //this.y = game.canvas.height/2;
    this.width = 80;
    this.height = 80;
    // this.name = name;
    // this.doors = doors;

}

Shadow.prototype.drawShadow = function () {
    this.game.ctx.fillStyle = "orange";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};

Shadow.prototype.checkCollisionDoor = function (roomId) {

    var room = '';

    this.currentRoom = rooms.find(function (room) {
        return room.name === roomId
    }.bind(this));
    
    this.currentDoors = this.currentRoom.doors;

    //Cuando haya colisión devolver el número de la puerta donde ha ocurrido
    this.currentDoors.forEach(function (door, doorNumber) {
        if ((Math.abs(this.x + this.game.player.x)) >= door.leftLimit 
        && door.rigthLimit >= Math.abs(this.x + this.width + this.game.player.x)) {
             room = doorNumber;
        }
    }.bind(this))

    return room;

};

// if (this.currentDoors.some(function (door, doorNumber) {
//     if ((Math.abs(this.x + this.game.player.x)) >= door.leftLimit &&
//         door.rigthLimit >= Math.abs(this.x + this.width + this.game.player.x)) {

//         return true
//     }
// }.bind(this))) return  


Shadow.prototype.drawShadowOn = function () {
    this.game.ctx.fillStyle = "green";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};
