

function Room(game, name, doors) {
    this.game = game;
    this.width = 800; //CANVAS
    this.height = 600; //CANVAS

    //Cargo la primera habitación por defecto
    //Podría hacerlo con un random
    this.roomId = "central";
    this.imgRoom = new Image();
    this.imgRoom.src = "images/central.png";
    console.log(this.imgRoom.width);
}


Room.prototype.roomChange = function (doorNumber) {
    var newRoom = this.game.shadow.currentRoom.doors[doorNumber].name;

    newRoom = rooms.find(function (room) {
        return room.name === newRoom
    }.bind(this));
    this.roomId = newRoom.name;
    this.imgRoom.src = newRoom.src;
    ///Que empiece desde la posicion inicial
    this.game.player.x = 0;
}

Room.prototype.drawRoom = function () {
    this.game.ctx.drawImage(this.imgRoom, this.game.player.x - 1500, this.game.player.y, this.width, (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgRoom, this.game.player.x, this.game.player.y, this.width, (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgRoom, this.game.player.x + 1500, this.game.player.y, this.width, (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
}
Room.prototype.hasKey = function(){
    return rooms.find(function (room) {
        return room.name === this.roomId 
    }.bind(this)).hasOwnProperty("key");
}
