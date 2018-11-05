function Room(game) {
    this.id = 
    this.game = game;

    this.imgBlack = new Image();
    this.imgBlack.src = "images/b1.png";
    this.width = 800;
    this.height = 600; //CANVAS


    this.topLimit = 300+4;
    this.downLimit = 500-4;
    this.rightLimit = 550-4-2;
    this.leftLimit = 300+4;
    this.numberOfRooms = 2;
    this.positionOfRooms = 0;
}
Room.prototype.drawRoom = function () {

    this.game.ctx.drawImage(this.imgBlack, this.game.player.x, this.game.player.y, this.width , (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgBlack, this.game.player.x + 1500, this.game.player.y, this.width , (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
    // this.game.ctx.beginPath();
    // this.game.ctx.lineWidth="2";
    // this.game.ctx.strokeStyle = "white";
    // this.game.ctx.rect(300, 300, 250, 200);
    // this.game.ctx.stroke();
}
Room.prototype.drawDoor = function(){
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillRect(400, 300-3, 30, 6);
    this.game.ctx.fillRect(300-3, 400, 6, 30);
}
