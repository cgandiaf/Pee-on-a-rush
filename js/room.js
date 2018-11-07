

function Room(game, name, doors) {
    this.game = game;
    this.width = 800; //CANVAS
    this.height = 600; //CANVAS

    //Cargo la primera habitación por defecto
    this.roomId = "black";
    this.imgRoom = new Image();
    this.imgRoom.src = "images/b3.png";
}


Room.prototype.roomChange = function (doorNumber) {
    var newRoom = this.game.shadow.currentRoom.doors[doorNumber].name;

    newRoom = rooms.find(function (room) {
        return room.name === newRoom
    }.bind(this));
    this.roomId = newRoom.name;
    this.imgRoom.src = newRoom.src;
}

Room.prototype.drawRoom = function () {
    this.game.ctx.drawImage(this.imgRoom, this.game.player.x - 1500, this.game.player.y, this.width, (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgRoom, this.game.player.x, this.game.player.y, this.width, (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgRoom, this.game.player.x + 1500, this.game.player.y, this.width, (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
}
